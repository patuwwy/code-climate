from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify, redirect, Flask
from flask_cors import CORS, cross_origin
import json
import time

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tickets.db'
app.config["DEBUG"] = True

db = SQLAlchemy(app)


def timestamp_now():
    return int(time.time())


# create db model
class Tickets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(30), nullable=False)
    category = db.Column(db.String(30), nullable=False)
    # data_created = db.Column(db.DateTime, default=datetime.utcnow)
    data_created = db.Column(db.Integer, default=timestamp_now)
    phone_number = db.Column(db.String(9))
    lat = db.Column(db.Float)
    long = db.Column(db.Float)
    description =db.Column(db.String(200))
    tags = db.Column(db.String(200))
    confirmed = db.Column(db.Boolean, default=False, nullable=False)
    # photo_id = db.Column(db.Integer, nullable=True)

    def toJSON(self):
        dict_repr = {'id': self.id,'type': self.type, 'data_created': self.data_created, 'phone_number': self.phone_number,
                     'lat': self.lat, 'long': self.long, 'description': self.description, 'tags': self.tags,
                     'category' : self.category, 'confirmed': self.confirmed}
        return json.dumps(dict_repr, indent=4)

    def __repr__(self):
        return str(self.toJSON())


@app.route('/ticket', methods=['POST', 'GET'])
@app.route('/', methods=['POST', 'GET'])
@cross_origin()
def tickets():
    """
    Dla GET:
    from_time - timestamp
    to_time - timestamp
    :return:
    """

    req = request.get_json()
    print(str(req))
    if request.method == 'POST':
        if 'ticket_type' in req:
            ticket_type = req['ticket_type']
        else:
            return "<h1>Nie mozna dodac nowego zgloszenia bez podania jego typu </p>"

        if 'phone_number' in req:
            phone_number = req['phone_number']
        else:
            return "<h1>Nie mozna dodac nowego zgloszenia bez podania swojego numeru telefonu </p>"

        if 'long' in req:
            long = req['long']
        else:
            return "<h1>Nie mozna dodac nowego zgloszenia bez podania szerokosci geograficznej </p>"

        if 'lat' in req:
            lat = req['lat']
        else:
            return "<h1>Nie mozna dodac nowego zgloszenia bez podania długości geograficznej </p>"

        if 'category' in req:
            category = req['category']
        else:
            return "<h1>Nie mozna dodac nowego zgloszenia bez kategorii </p>"

        if 'description' in req:
            description = req['description']
        else:
            description = ''

        if 'data_created' in req:
            data_created = int(req['data_created'])
        else:
            data_created = int(time.time())

        if 'tags' in req:
            tags = req['tags']
        else:
            tags = '[normal]'

        new_ticket = Tickets(type=ticket_type, phone_number=phone_number, long=long, lat=lat, category=category,
                             tags=tags, data_created=data_created, description=description)


        try:
            db.session.add(new_ticket)
            db.session.commit()
            return str(new_ticket.id)
        except Exception as e:
            print(str(e))
            return str(False)
    else:
        tickets = Tickets.query.order_by(Tickets.data_created)
        if 'from_time' in request.args:
            # czas = datetime.utcfromtimestamp(int(request.args['from_time']))
            czas = int(request.args['from_time'])
            tickets = list(filter(lambda x: x.data_created >= czas, tickets))
        if 'to_time' in request.args:
            # czas = datetime.utcfromtimestamp(int(request.args['to_time']))
            czas = int(request.args['to_time'])
            tickets = list(filter(lambda x: x.data_created <= czas, tickets))

        resp = '['
        for t in tickets:
            resp += str(t) + ', '
        if tickets:
            resp = resp[:-2]
        resp += ']'
        return resp
        # ticket = Tickets.query.order_by(Tickets.type)
        # print(str(ticket))
        # return str(ticket)


if __name__ == '__main__':
    app.run()

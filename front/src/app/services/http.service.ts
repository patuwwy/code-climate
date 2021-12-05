import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ticket } from "./ticket";

@Injectable({
    providedIn: "root",
})
export class HttpService {
    private url = "https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts";
    private apiBaseUrl = "http://3.141.30.121";
    private airlyKey = "INSERT_AIRLY_KEY_HERE";

    constructor(private http: HttpClient) {}

    getPosts() {
        return this.http.get(this.url);
    }

    getTickets() {
        return this.http.get(`${this.apiBaseUrl}`);
    }

    postTicket(ticket: Ticket) {
        return this.http.post(`${this.apiBaseUrl}`, ticket);
    }

    getAirlyData(lat: number, lng: number) {}
}

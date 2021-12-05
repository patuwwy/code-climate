import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { Ticket } from "../../services/ticket";

@Component({
    selector: "app-submit",
    templateUrl: "./submit.component.html",
    styleUrls: ["./submit.component.scss"],
})
export class SubmitComponent implements OnInit {
    tags = [
        "Studzienka wybija",
        "Przepełniony zbiornik retencyjny",
        "Zalany budynek",
        "Zagrożenie mieszkańców",
        "Rów/rzeka wylewa",
        "Niewłaściwe zabezpieczenie terenu",
        "Zator na rzece/rowie",
        "Woda na ulicy",
    ];

    form = new FormGroup({
        category: new FormControl("water"),
        tags: new FormControl([], Validators.required),
        photo: new FormControl(null, Validators.required),
        //name: new FormControl("", Validators.required),
        //surname: new FormControl("", Validators.required),
        //email: new FormControl(""),
        phone: new FormControl("", Validators.required),
        location: new FormControl("50.0421369,22.0028409"),
        description: new FormControl(""),
    });
    agrees = [
        {
            completed: false,
            desc: "Rozumiem, że aplikacja służy do informowania mieszkańców i urzędników o zagrożeniach. Zgłoszenie zagrożenia przez formularz nie jest rownoznaczne z otrzymaniem pomocy.",
        },
        { completed: false, desc: "Zgadzam się na przetwarzanie danych osobowych i akceptuję regulamin" },
        {
            completed: false,
            desc: "Zgadzam się na możliwy kontakt zwrotny ze strony Urzędu Miasta w Rzeszowie w celu potwierdzenia przyjęcia zgłoszenia lub dodatkowych pytań.",
        },
    ];

    constructor(private http: HttpService) {}

    ngOnInit(): void {}

    selectTag(tag: string) {
        console.log(tag);
        const index = this.form.value.tags.indexOf(tag);

        if (index > -1) {
            this.form.value.tags.splice(index, 1);
        } else {
            this.form.value.tags.push(tag);
        }
    }

    setAll($event: boolean) {
        this.agrees.forEach((a) => (a.completed = $event));
    }

    submit() {
        const formValue = this.form.value;

        // TODO: location from address, from map selection, from location sensor
        const ticket: Ticket = {
            ticket_type: formValue.category,
            lat: formValue.location.split(",")[0],
            long: formValue.location.split(",")[1],
            description: formValue.description,
            phone_number: formValue.phone,
            data_created: Date.now(),
            tags: formValue.tags.join(","),
            category: formValue.category,
        };

        this.http.postTicket(ticket).subscribe((res) => {
            alert("Dziękujemy za zgłoszenie" + res);
        });
    }
}

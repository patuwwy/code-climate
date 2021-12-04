import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-landing",
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
    smallMapOptions: google.maps.MapOptions = {
        center: { lat: 50.0221369, lng: 22.0028409 },
        zoom: 13,
    };

    smallMapSize = {
        height: "161px",
        width: "100%",
    };

    constructor() {}

    ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "app-landing",
    templateUrl: "./landing.component.html",
    styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
    smallMapOptions: google.maps.MapOptions = {
        mapId: "3b3ec4791826c7a",
        center: { lat: 50.0221369, lng: 22.0028409 },
        zoom: 13,
    };

    smallMapSize = {
        height: "236px",
        width: "100%",
    };

    constructor(private router: Router) {}

    ngOnInit(): void {}

    submit(type: string) {
        console.log(type);

        this.router.navigate(["zgloszenie", type]);
    }
}

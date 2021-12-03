import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
    options: google.maps.MapOptions = {
        center: { lat: 50.0221369, lng: 22.0028409 },
        zoom: 13,
    };

    size = {
        height: "100%",
        width: "100%",
    };

    constructor(private httpService: HttpService) {}

    ngOnInit(): void {}

    onMapClick($event: any) {
        const loc = {
            latLng: $event.latLng,
        };

        console.log("map clicked", loc.latLng.lat(), loc.latLng.lng());

        this.httpService.getPosts().subscribe((res) => {
            console.log(res);
        });
    }
}

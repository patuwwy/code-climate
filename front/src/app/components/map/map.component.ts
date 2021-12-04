import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { places } from "src/app/fake-data/places";

const markerImages = {
    flood: {
        confirmed: "../../../assets/map/icons/e6.png",
        unconfirmed: "../../../assets/map/icons/e7.png",
    },
    smog: {
        confirmed: "../../../assets/map/icons/p4.png",
        unconfirmed: "../../../assets/map/icons/p5.png",
    },
};

@Component({
    selector: "app-map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
    places: any = [];

    options: google.maps.MapOptions = {
        mapId: "3b3ec4791826c7a",
        center: { lat: 50.0421369, lng: 22.0028409 },
        zoom: 12.5,
        clickableIcons: false,
        disableDefaultUI: true,
        fullscreenControl: false,
        restriction: {
            latLngBounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(49.5, 21.5), // top left corner of map
                new google.maps.LatLng(50.5, 23)
            ),
            strictBounds: true,
        },
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
    }

    onIdle($event: any) {
        console.log("map idle");
        this.places = places.map((place, i) => {
            const image = markerImages[place.type][place.confirmed ? "confirmed" : "unconfirmed"];
            return {
                position: new google.maps.LatLng(place.lat, place.lng),
                visible: true,
                title: i.toString(),
                options: {
                    icon: {
                        url: image,
                    },
                },
            };
        });
    }

    onMarkerClick($event: any) {}
}

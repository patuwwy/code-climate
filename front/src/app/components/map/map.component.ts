import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { places } from "src/app/fake-data/places";
import { installations } from "src/app/fake-data/airly-instalations";
import { Ticket } from "src/app/services/ticket";
import { convertUpdateArguments } from "@angular/compiler/src/compiler_util/expression_converter";

const markerImages = {
    water: {
        confirmed: "../../../assets/map/icons/e6.png",
        unconfirmed: "../../../assets/map/icons/e7.png",
    },
    air: {
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

    filter: "confirmed" | "unconfirmed" | "all" = "confirmed";
    type: "air" | "water" | "all" = "all";

    popupData: any = {};
    popupOpen = false;

    options: google.maps.MapOptions = {
        mapId: "3b3ec4791826c7a",
        center: { lat: 50.0421369, lng: 22.0028409 },
        zoom: 12.5,
        clickableIcons: false,
        disableDefaultUI: true,
        fullscreenControl: false,
        isFractionalZoomEnabled: true,
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
        this.update();
    }

    update() {
        const notifies = places
            .filter((p) => p.type === this.type || this.type === "all")
            .map((place, i) => {
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
                    type: "notification",
                    description: place.description,
                };
            });

        const airlyInstallations = installations.map((installation, i) => {
            return {
                position: new google.maps.LatLng(installation.location.latitude, installation.location.longitude),
                visible: true,
                title: i.toString(),
                options: {
                    icon: {
                        url: markerImages.air.confirmed,
                    },
                },
                type: "airly-installation",
            };
        });

        const tickets = this.httpService.getTickets().subscribe((res) => {
            this.places.concat(res);
        });

        this.places = notifies; //.concat(airlyInstallations);
    }

    onMarkerClick(place: any) {
        console.log(place);
        this.options.zoom = 15;
        this.options.center = place.position;
        this.popupData = place;
        this.popupOpen = true;
    }

    setFilter(filter: this["filter"]) {
        console.log("filter", filter);
        this.filter = filter;
        this.update();
    }

    setType(type: this["type"]) {
        console.log("type", type);
        this.type = type;
        this.update();
    }
}

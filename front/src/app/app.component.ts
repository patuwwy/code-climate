import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "code-climate";
    showFiller = false;

    constructor() {}

    toggleNav() {
        this.showFiller = !this.showFiller;
    }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from "./components/main/main.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientModule } from "@angular/common/http";
import { SubmitNotificationComponent } from "./components/submit-notification/submit-notification.component";

@NgModule({
    declarations: [AppComponent, MainComponent, SubmitNotificationComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, GoogleMapsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

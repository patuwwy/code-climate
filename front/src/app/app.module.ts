import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MapComponent } from "./components/map/map.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientModule } from "@angular/common/http";
import { SubmitNotificationComponent } from "./components/submit-notification/submit-notification.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LoginComponent } from "./components/login/login.component";
import { LandingComponent } from "./components/landing/landing.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { DescriptionComponent } from "./components/description/description.component";
@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        SubmitNotificationComponent,
        LoginComponent,
        LandingComponent,
        DescriptionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        GoogleMapsModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

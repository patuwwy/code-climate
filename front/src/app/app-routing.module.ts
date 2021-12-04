import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { MapComponent } from "./components/map/map.component";
import { SubmitNotificationComponent } from "./components/submit-notification/submit-notification.component";

const routes: Routes = [
    { path: "mapa", component: MapComponent },
    { path: "zgloszenie", component: SubmitNotificationComponent },
    { path: "dlaczego", component: SubmitNotificationComponent },
    { path: "", component: LandingComponent },
    { path: "**", redirectTo: "/" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

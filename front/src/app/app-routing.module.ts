import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { MapComponent } from "./components/map/map.component";
import { SubmitComponent } from "./submit/submit.component";

const routes: Routes = [
    { path: "mapa", component: MapComponent },
    { path: "zgloszenie", component: SubmitComponent },
    { path: "", component: LandingComponent },
    { path: "**", redirectTo: "/" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

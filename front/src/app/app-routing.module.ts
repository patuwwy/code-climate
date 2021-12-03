import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { SubmitNotificationComponent } from "./components/submit-notification/submit-notification.component";

const routes: Routes = [
    { path: "map", component: MainComponent },
    { path: "submit", component: SubmitNotificationComponent },
    { path: "**", redirectTo: "submit" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StreamComponent } from "./stream/stream.component";
import { ClipsComponent } from "./clips/clips.component";
import { PlanningComponent } from "./planning/planning.component";
import { DescriptionComponent } from "./description/description.component";
import { VodComponent } from "./vod/vod.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: StreamComponent },
  { path: "clips", component: ClipsComponent },
  { path: "planning", component: PlanningComponent },
  { path: "description", component: DescriptionComponent },
  { path: "vods", component: VodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

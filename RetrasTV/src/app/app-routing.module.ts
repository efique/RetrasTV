import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamComponent } from './stream/stream.component';
import { DescriptionComponent } from './description/description.component';
import { PlanningComponent } from './planning/planning.component';
import { ClipsComponent } from './clips/clips.component';

const routes: Routes = [
  { path: '', component: StreamComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'clips', component: ClipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

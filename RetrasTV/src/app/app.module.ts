import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClipsComponent } from './clips/clips.component';
import { StreamComponent } from './stream/stream.component';
import { PlanningComponent } from './planning/planning.component';
import { DescriptionComponent } from './description/description.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipsComponent,
    StreamComponent,
    PlanningComponent,
    DescriptionComponent,
    ConnexionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

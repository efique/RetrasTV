import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StreamComponent } from './stream/stream.component';
import { PlanningComponent } from './planning/planning.component';
import { DescriptionComponent } from './description/description.component';
import { VodComponent } from './vod/vod.component';
import { ClipsComponent } from './clips/clips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StreamComponent,
    PlanningComponent,
    DescriptionComponent,
    VodComponent,
    ClipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

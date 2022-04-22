import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ZbsEntryComponent } from './zbs-entry/zbs-entry.component';
import {QuestionsService} from "./injectable/questions-service";
import { ZbsComponent } from './zbs/zbs.component';
import { RpiComponent } from './rpi/rpi.component';
import { ZfiComponent } from './zfi/zfi.component';
import { BskComponent } from './bsk/bsk.component';
import { WzrComponent } from './wzr/wzr.component';
import { JoComponent } from './jo/jo.component';
import { HomeComponent } from './home/home.component';
import { EdComponent } from './ed/ed.component';
import { StComponent } from './st/st.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZbsEntryComponent,
    ZbsComponent,
    RpiComponent,
    ZfiComponent,
    BskComponent,
    WzrComponent,
    JoComponent,
    HomeComponent,
    EdComponent,
    StComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ZbsEntryComponent } from './zbs-entry/zbs-entry.component';
import {QuestionsService} from "./injectable/questions-service";
import { ZbsComponent } from './zbs/zbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZbsEntryComponent,
    ZbsComponent
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

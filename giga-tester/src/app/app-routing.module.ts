import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZbsEntryComponent} from "./zbs-entry/zbs-entry.component";
import {ZbsComponent} from "./zbs/zbs.component";
import {RpiComponent} from "./rpi/rpi.component";
import {ZfiComponent} from "./zfi/zfi.component";
import {BskComponent} from "./bsk/bsk.component";
import {WzrComponent} from "./wzr/wzr.component";
import {JoComponent} from "./jo/jo.component";
import {HomeComponent} from "./home/home.component";
import {EdComponent} from "./ed/ed.component";
import {StComponent} from "./st/st.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zbs-entry', component: ZbsEntryComponent },
  { path: 'zbs', component: ZbsComponent },
  { path: 'rpi', component: RpiComponent },
  { path: 'zfi', component: ZfiComponent },
  { path: 'bsk', component: BskComponent },
  { path: 'wzr', component: WzrComponent },
  { path: 'jo', component: JoComponent },
  { path: 'ed', component: EdComponent },
  { path: 'st', component: StComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

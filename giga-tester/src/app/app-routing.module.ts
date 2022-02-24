import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZbsEntryComponent} from "./zbs-entry/zbs-entry.component";
import {ZbsComponent} from "./zbs/zbs.component";

const routes: Routes = [
  { path: 'zbs-entry', component: ZbsEntryComponent },
  { path: 'zbs', component: ZbsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

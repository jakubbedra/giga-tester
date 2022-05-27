import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {EnterKeyComponent} from "./enter-key/enter-key.component";
import {QuestionParserComponent} from "./question-parser/question-parser.component";
import {PmlComponent} from "./pml/pml.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'enter-key', component: EnterKeyComponent},
  {path: 'parser', component: QuestionParserComponent},
  {path: 'zbs-entry', component: ZbsEntryComponent},
  {path: 'zbs', component: ZbsComponent},
  {path: 'rpi', component: RpiComponent},
  {path: 'zfi', component: ZfiComponent},
  {path: 'bsk', component: BskComponent},
  {path: 'wzr', component: WzrComponent},
  {path: 'jo', component: JoComponent},
  {path: 'ed', component: EdComponent},
  {path: 'st', component: StComponent},
  //------------------------------------------------------
  {path: '46190c5c-3a50-4b41-92c1-609f54d738d3', component: ZbsEntryComponent},
  {path: '1e83ad9f-459b-4587-baf6-ff801b7dd6a4', component: ZbsComponent},
  {path: '74ad80ab-ef93-444d-99bb-3b285356deed', component: RpiComponent},
  {path: 'de6eb720-a6a8-44a7-92db-d8b675d3fe6e', component: ZfiComponent},
  {path: '031f5088-b155-4ddd-b900-ceeac4cd6f30', component: BskComponent},
  {path: '33caaee6-9d99-4ce4-aed9-0085988e1be9', component: WzrComponent},
  {path: 'a9ee3187-5e4b-4cb6-82b1-e544a4a9f8bd', component: JoComponent},
  {path: '1075308d-3319-4a52-a088-5878a792d318', component: EdComponent},
  {path: '82d8dd92-0a7a-4f9a-914b-c5575b1907a3', component: StComponent},
  {path: '836aa962-1f08-4521-91aa-9f862f4b88c5', component: PmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

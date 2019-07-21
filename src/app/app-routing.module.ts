import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {XmlComponent} from './pages/xml/xml.component';
import {JsonComponent} from './pages/json/json.component';
import {JsonserviceComponent} from './pages/jsonservice/jsonservice.component';
import {Jsons1Component} from './pages/jsons1/jsons1.component';
const routes : Routes=[
  {
    path: 'xml',component:XmlComponent
  },
  {
    path: 'json',component:JsonComponent
  },
  {
    path: 'jsonservice',component:JsonserviceComponent
  },
  {
    path: 'jsons1',component:Jsons1Component
  }
]
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

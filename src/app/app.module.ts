import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XmlComponent } from './pages/xml/xml.component';
import { JsonComponent } from './pages/json/json.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JsonserviceComponent } from './pages/jsonservice/jsonservice.component';
import { Jsons1Component } from './pages/jsons1/jsons1.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    XmlComponent,
    JsonComponent,
    JsonserviceComponent,
    Jsons1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import { InfoComponent } from './components/info/info.component';
import {RaceViewModel} from "./models/race-view-model";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatExpansionModule,
        FormsModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule
    ],
  providers: [RaceViewModel],
  bootstrap: [AppComponent]
})
export class AppModule { }

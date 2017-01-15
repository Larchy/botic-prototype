import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule }   from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogonComponent } from './logon/logon.component';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { LiveComponent } from './live/live.component';
import { EventSetupComponent } from './event-setup/event-setup.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LogonComponent,
    HomeComponent,
    SetupComponent,
    LiveComponent,
    EventSetupComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

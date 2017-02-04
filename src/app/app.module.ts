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
import { ProfileComponent } from './profile/profile.component';
import { LiveComponent } from './live/live.component';
import { EventSetupComponent } from './event-setup/event-setup.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { SecuritySetupComponent } from './security-setup/security-setup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { SyncComponent } from './sync/sync.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { EventViewComponent } from './event-view/event-view.component';
import { ChannelTopicsComponent } from './channel-topics/channel-topics.component';
import { HostViewComponent } from './host-view/host-view.component';
import { EventSummaryComponent } from './event-summary/event-summary.component';
import { DonationComponent } from './donation/donation.component';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
import { EventHistoryComponent } from './event-history/event-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LogonComponent,
    ProfileComponent,
    LiveComponent,
    EventSetupComponent,
    AppMenuComponent,
    SecuritySetupComponent,
    SignUpComponent,
    BankInfoComponent,
    SyncComponent,
    ProfileViewComponent,
    EventViewComponent,
    ChannelTopicsComponent,
    HostViewComponent,
    EventSummaryComponent,
    DonationComponent,
    ProfileSetupComponent,
    EventHistoryComponent
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

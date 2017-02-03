import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { LogonComponent }         from './logon/logon.component';
import { SecuritySetupComponent } from './security-setup/security-setup.component';
import { ProfileComponent }       from './profile/profile.component';
import { ProfileSetupComponent }  from './profile-setup/profile-setup.component';
import { ProfileViewComponent }   from './profile-view/profile-view.component';
import { HostViewComponent }      from './host-view/host-view.component';
import { LiveComponent }          from './live/live.component';
import { ChannelTopicsComponent } from './channel-topics/channel-topics.component';
import { EventSetupComponent }    from './event-setup/event-setup.component';
import { EventSummaryComponent }  from './event-summary/event-summary.component';
import { NotFoundComponent }      from './not-found/not-found.component';
import { BankInfoComponent }      from "./bank-info/bank-info.component";
import { SyncComponent }          from "./sync/sync.component";
import { DonationComponent }      from "./donation/donation.component";

const appRoutes: Routes = [
  { path: 'logon', component: LogonComponent },
  { path: 'security', component: SecuritySetupComponent },
  { path: 'bankInfo', component: BankInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-setup', component: ProfileSetupComponent },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'donate', component: DonationComponent },
  { path: 'channel-topics', component: ChannelTopicsComponent },
  { path: 'sync', component: SyncComponent },
  { path: 'host-view', component: HostViewComponent },
  { path: 'live', component: LiveComponent },
  { path: 'event-setup', component: EventSetupComponent },
  { path: 'event-summary', component: EventSummaryComponent },
  { path: '',   redirectTo: '/logon', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { LogonComponent }         from './logon/logon.component';
import { SecuritySetupComponent } from './security-setup/security-setup.component';
import { ProfileComponent }       from './profile/profile.component';
import { ProfileSetupComponent }  from './profile-setup/profile-setup.component';
import { ProfileViewComponent }   from './profile-view/profile-view.component';
import { LiveComponent }          from './live/live.component';
import { EventSetupComponent }    from './event-setup/event-setup.component';
import { EventSummaryComponent }    from './event-summary/event-summary.component';
import { NotFoundComponent }      from './not-found/not-found.component';
import {BankInfoComponent}        from "./bank-info/bank-info.component";
import {SyncComponent}            from "./sync/sync.component";

const appRoutes: Routes = [
  { path: 'logon', component: LogonComponent },
  { path: 'security', component: SecuritySetupComponent },
  { path: 'bankInfo', component: BankInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-setup', component: ProfileSetupComponent },
  { path: 'profile-view', component: ProfileViewComponent },
  { path: 'sync', component: SyncComponent },
  { path: 'live', component: LiveComponent },
  { path: 'eventSetup', component: EventSetupComponent },
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

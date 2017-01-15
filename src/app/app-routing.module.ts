import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LogonComponent }        from './logon/logon.component';
import { HomeComponent }         from './home/home.component';
import { NotFoundComponent }     from './not-found/not-found.component';
const appRoutes: Routes = [
  { path: 'logon', component: LogonComponent },
  { path: 'home', component: HomeComponent },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StartComponent } from './pages/start/start.component';
import { AuthGuardService } from './services/auth-guard.service';
import {PrivateComponent} from './pages/private/private.component'
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'private', component: PrivateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

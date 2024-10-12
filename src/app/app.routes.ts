import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { VacationRequestsComponent } from './vacation-request/vacation-request.component';


export const appRoutes: Routes = [
  { path: 'home-page', component: HomeComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'requests-page1', component: VacationRequestsComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
];
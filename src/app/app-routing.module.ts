import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserbooksComponent } from './userbooks/userbooks.component';
import { HomeDataResolverService } from './resolvers/home-data-resolver.service';
import { ReadBookComponent } from './read-book/read-book.component';
import { AuthGuardService } from "../app/services/guards/auth-guard.service"
import { ReportComponent } from './components/report/report.component';
const ROUTES: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'report',
    pathMatch: 'full',
    component: ReportComponent,
  },
  {
    path: 'user',
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    component: ProfileComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'books',
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    component: UserbooksComponent,
  },
  {
    path: 'read/book',
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    component: ReadBookComponent,
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

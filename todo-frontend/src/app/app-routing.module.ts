import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteGuardService } from './services/route-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodoListComponent, canActivate: [RouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

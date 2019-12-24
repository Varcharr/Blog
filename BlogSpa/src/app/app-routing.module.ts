import { AuthGuard } from './_guards/auth.guard';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"topposts", component: TopPostsComponent},
  {path:"post/", component: RegisterComponent, canActivate: [AuthGuard]},
  {path:"**", component: TopPostsComponent, pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

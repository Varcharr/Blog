import { UserProfileComponent } from "./user-profile/user-profile.component";
import { PostComponent } from "./post/post/post.component";
import { PostFormComponent } from "./post/postForm/postForm.component";
import { AuthGuard } from "./_guards/auth.guard";
import { TopPostsComponent } from "./post/top-posts/top-posts.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "user/:id", component: UserProfileComponent },
  { path: "topposts", component: TopPostsComponent, canActivate: [AuthGuard] },
  { path: "post/new", component: PostFormComponent, canActivate: [AuthGuard] },
  { path: "post/:id", component: PostComponent, canActivate: [AuthGuard] },
  { path: "**", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

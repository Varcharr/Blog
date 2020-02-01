import { HtmlSanitizerPipe } from "./pipes/sanitizer.pipe";
import { CommentComponent } from "./comment/comment/comment.component";
import { CommentFormComponent } from "./comment/comment-form/comment-form.component";
import { AuthGuard } from "./_guards/auth.guard";
import { ErrorInteceptorProvider } from "./_services/error.inteceptor";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { QuillModule } from "ngx-quill";

import { AuthService } from "./_services/auth.service";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { PostComponent } from "./post/post/post.component";
import { TopPostsComponent } from "./post/top-posts/top-posts.component";
import { PostFormComponent } from "./post/postForm/postForm.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { environment } from "src/environments/environment";
import { CommentWrapperComponent } from "./comment/comment-wrapper/comment-wrapper.component";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    TopPostsComponent,
    PostFormComponent,
    UserProfileComponent,
    CommentFormComponent,
    CommentComponent,
    CommentWrapperComponent,
    HtmlSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.whitelistedDomains,
        blacklistedRoutes: environment.blacklistedRoutes
      }
    }),
    ToastrModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [AuthService, ErrorInteceptorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

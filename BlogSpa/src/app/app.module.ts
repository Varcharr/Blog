import { AuthGuard } from './_guards/auth.guard';
import { ErrorInteceptorProvider } from './_services/error.inteceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthService } from './_services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { TopPostsComponent } from './top-posts/top-posts.component';

@NgModule({
   declarations: [
      AppComponent,
      PostComponent,
      NavbarComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      PostComponent,
      TopPostsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
   ],
   providers: [
      AuthService,
      ErrorInteceptorProvider,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

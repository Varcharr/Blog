import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router

  ) { }
  model: any = {};

  ngOnInit() {
  }
  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(res => {
      console.log('Success');
      this.router.navigate(['/topposts']);
    },
    (err) => {
      this.toastr.error(err);

    }
    );
  }

}

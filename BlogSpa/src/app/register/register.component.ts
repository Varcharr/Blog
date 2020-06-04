//////////////////////////////
// Poglavlje 3.5 - Komponente
/////////////////////////////
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  model: any = {};

  ngOnInit() {}
  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(
      (res) => {
        console.log("Success");
        this.router.navigate(["/login"]);
      },
      (err) => {
        this.toastr.error(err);
      }
    );
  }
}

import { AuthService } from "./../_services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) return true;

    this.toastr.error("You do not have the rigth permision to see this");
    this.router.navigate(["/login"]);
    return false;
  }
}

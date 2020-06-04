///////////////////////////
// Poglavlje 15 - Gardovi
//////////////////////////
import { AuthService } from "./../_services/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
//@Injectable dekorator moze biti izostavljen ukoliko unutar garda ne planiramo da koristimo neki servis
// Unutar dekoratora takodje definisemo da ce gard biti dostupan na globalnom nivou aplikacije pomocu providedIn: "root"
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) return true;

    this.toastr.error("Nemate pravo da vidite ovu stranu");
    this.router.navigate(["/login"]);
    return false;
  }
}

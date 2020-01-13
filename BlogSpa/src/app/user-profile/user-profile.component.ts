import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  user: any;

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    let userId = this.route.snapshot.paramMap.get("id");

    this.userService.getUser(userId).subscribe(
      res => {
        this.user = res;
        console.log("User:", res);
      },
      err => {
        this.toastr.error("Error while loading user data");
      }
    );
  }
}

import { PostService } from "src/app/_services/post.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../_services/user.service";
import { Post } from "../_models/post/post";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  user: any;
  posts: Post[];

  ngOnInit() {
    this.fetchUserInfo();
    this.fetchUserPosts();
  }
  fetchUserInfo() {
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
  addClassToPost(post) {
    return "<span class='max-lines'>" + post + "</span>";
  }
  fetchUserPosts() {
    let userId = this.route.snapshot.paramMap.get("id");
    this.postService.fetchUserPosts(userId).subscribe(
      res => {
        this.posts = res;
      },
      err => {
        this.toastr.error("Greska pri ucitavanju postova");
      }
    );
  }
}

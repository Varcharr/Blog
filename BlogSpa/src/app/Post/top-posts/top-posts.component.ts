import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-top-posts",
  templateUrl: "./top-posts.component.html",
  styleUrls: ["./top-posts.component.scss"]
})
export class TopPostsComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService,
    private toastr: ToastrService
  ) {}

  topPosts: any;

  ngOnInit() {
    this.getTopPosts();
  }

  getTopPosts() {
    this.postService.getTopPost().subscribe(
      res => {
        console.log(res);
        this.topPosts = res;
      },
      err => {
        this.toastr.error(err);
      }
    );
  }
}

import { Post } from "./../../_models/post/post";
import { PostService } from "./../../_services/post.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-postForm",
  templateUrl: "./postForm.component.html",
  styleUrls: ["./postForm.component.scss"]
})
export class PostFormComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  post: Post = { name: "", content: "" };
  readOnly: boolean = false;

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get("id");
    if (postId) this.fetchPost(postId);
  }

  fetchPost(postId) {
    this.postService.fetchPost(postId).subscribe(
      res => {
        this.post = res;
      },
      err => {
        this.toastr.error(err);
      }
    );
  }

  save() {
    if (this.post.id)
      this.postService.updatePost(this.post).subscribe(
        res => {
          this.toastr.success("Post izmenjen");
          this.router.navigate(["/topposts"]);
        },
        err => {
          this.toastr.error(err);
        }
      );
    else
      this.postService.createPost(this.post).subscribe(
        res => {
          this.toastr.success("Post sacuvan");
          this.router.navigate(["/topposts"]);
        },
        err => {
          this.toastr.error(err);
        }
      );
  }
}

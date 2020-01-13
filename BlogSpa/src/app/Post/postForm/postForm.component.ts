import { CreatePost } from "./../../_models/post/createPost";
import { PostService } from "./../../_services/post.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
    private toastr: ToastrService
  ) {}

  post: CreatePost = { name: "", content: "" };
  readOnly: boolean = false;

  ngOnInit() {}
  save() {
    console.log(this.post);
    this.postService.createPost(this.post).subscribe(
      res => {
        this.toastr.success("Post Saved");
        this.router.navigate(["/topposts"]);
      },
      err => {
        this.toastr.error(err);
      }
    );
  }
}

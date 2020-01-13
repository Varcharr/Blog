import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  post: any;
  ngOnInit() {
    this.getPost();
  }

  getPost() {
    let postId = this.route.snapshot.paramMap.get("id");
    console.log(postId);

    this.postService.getPost(postId).subscribe(
      res => {
        this.post = res;
        console.log(res);
      },
      err => {
        this.toastr.error("Error while loading post data");
      }
    );
  }
}

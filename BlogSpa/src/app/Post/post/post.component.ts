//////////////////////////////
// Poglavlje 3.5 - Komponente
/////////////////////////////
import { CommentService } from "./../../_services/comment.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  post: any;
  comments: any;
  postId;
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get("id");
    this.fetchPost();
    this.fetchComments();
  }

  fetchPost() {
    this.postService.fetchPost(this.postId).subscribe(
      (res) => {
        this.post = res;
      },
      (err) => {
        this.toastr.error("Error while loading post data");
      }
    );
  }

  fetchComments() {
    this.commentService.fetchPostComments(this.postId).subscribe(
      (res) => {
        this.comments = res;
      },
      (err) => {
        this.toastr.error("Error while loading comment data");
      }
    );
  }
  saveComment(commentContent) {
    let postId = this.route.snapshot.paramMap.get("id");
    let comment = { postId: postId, content: commentContent };

    this.commentService.createComment(comment).subscribe(
      (res) => {
        this.toastr.success("Komentar uspesno dodat");
        this.fetchComments();
      },
      (err) => {
        this.toastr.error("Greska prilikom cuvanja komentara");
      }
    );
  }
  trackByFn(index, item) {
    return item.id;
  }
  deleteComment(commentId) {
    this.commentService.deleteComment(commentId).subscribe(
      (res) => {
        this.toastr.success("Komentar uspesno obrisan");
        this.comments = this.comments.filter(
          (comment) => comment.id != commentId
        );
      },
      (err) => {
        this.toastr.error("Greska prilikom brisanja komentara");
      }
    );
  }
  editPost() {
    this.router.navigate(["/post/", this.postId, "edit"]);
  }
  isUserOwner() {
    return this.authService.isUserOwner(this.post.createdById);
  }
  deletePost() {
    this.postService.deletePost(this.postId).subscribe(
      (res) => {
        this.toastr.success("Članak uspešno obrisan");
        this.router.navigate(["/topposts"]);
      },
      (err) => {
        this.toastr.error("Greška prilikom brisanja članka");
      }
    );
  }
}

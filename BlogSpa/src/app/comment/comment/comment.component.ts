import { AuthService } from "./../../_services/auth.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @Input() comment;
  @Output() onDelete = new EventEmitter();
  ngOnInit() {}

  delete() {
    this.onDelete.emit();
  }
  isUserOwner() {
    return this.authService.isUserOwner(this.comment.createdById);
  }
}

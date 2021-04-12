import { Component, OnInit } from "@angular/core";
import { ThreadsService } from "../threads/threads.service";
@Component({
  selector: "app-add-thread",
  templateUrl: "./add-thread.component.html",
  styleUrls: ["./add-thread.component.scss"],
})
export class AddThreadComponent implements OnInit {
  constructor(public threadService: ThreadsService) {}

  ngOnInit(): void {}
}

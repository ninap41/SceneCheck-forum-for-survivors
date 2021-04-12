import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ThreadsService } from "./threads.service";
import { Thread } from "../models/thread";
import { Observable } from "rxjs";
import { of, BehaviorSubject, Subject, throwError, pipe } from "rxjs";
@Component({
  selector: "app-threads",
  templateUrl: "./threads.component.html",
  styleUrls: ["./threads.component.scss"],
})
export class ThreadsComponent implements OnInit {
  threads: any;
  threadCreate: Thread;
  loaded: boolean;
  constructor(
    public router_: Router,
    private route: ActivatedRoute,
    public _threadsService: ThreadsService
  ) {}
  async ngOnInit(): Promise<void> {
    var boardId = this.route.snapshot.paramMap.get("id");

    Promise.all([this.getAllThreads(boardId)]).then(() => (this.loaded = true));
  }
  public async getAllThreads(_id: string) {
    this.threads = await this._threadsService.getThreads(_id);
  }

  public async deleteThread(thread: Thread) {
    await this._threadsService.deleteThread(thread);
  }
}

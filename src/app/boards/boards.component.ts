import { Component, OnInit } from "@angular/core";
import { BoardsService } from "./boards.service";
import { Board } from "../models/Board";
@Component({
  selector: "app-boards",
  templateUrl: "./boards.component.html",
  styleUrls: ["./boards.component.scss"],
})
export class BoardsComponent implements OnInit {
  boards: any;
  loaded: boolean;
  board: Board;

  constructor(public _boardsService: BoardsService) {}

  ngOnInit(): void {
    Promise.all([this.getAllBoards()]).then(
      //hard coded
      () => (this.loaded = true)
    );
  }

  public async getAllBoards() {
    this.boards = await this._boardsService.getBoards();
  }

  public async createBoard(obj: Board) {
    console.log("obj", obj);
    var model: Board = {
      name: obj.name,
      description: obj.description,
    };

    this._boardsService.createBoard(model);
  }
}

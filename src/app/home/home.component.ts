import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import { Animate } from "./animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: Animate,
})
export class HomeComponent implements OnInit {
  constructor(public _ls: StorageService) {}

  ngOnInit(): void {}
}

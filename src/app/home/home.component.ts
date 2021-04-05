import { Component, OnInit } from "@angular/core";
import { Animate } from "./animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: Animate,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { faGamepad, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import {
  Router,
  ActivatedRoute,
  ParamMap,
  RouterOutlet,
} from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  faGamepad = faGamepad;
  faMicrophone = faMicrophone;
  title;

  constructor(public router_: Router) {}
}

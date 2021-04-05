import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

export var Animate = [
  trigger("changeDivSize", [
    state(
      "initial",
      style({
        backgroundColor: "green",
        width: "100px",
        height: "100px",
      })
    ),
    state(
      "final",
      style({
        backgroundColor: "red",
        width: "200px",
        height: "200px",
      })
    ),
    transition("initial=>final", animate("1500ms")),
    transition("final=>initial", animate("1000ms")),
  ]),
];

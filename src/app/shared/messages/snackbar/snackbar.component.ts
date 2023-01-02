import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { NotificationService } from "../notifications.service";
import { Observable } from "rxjs";
import "rxjs/add/observable/timer";
import "rxjs/operator/do";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "mt-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"],
  animations: [
    trigger("snack-visibility", [
      state(
        "hidden",
        style({
          opacity: 0,
          bottom: 0,
        })
      ),
      state(
        "visible",
        style({
          opacity: "1px",
          bottom: "30px",
        })
      ),
      transition("hidden => visible", animate("500ms 0s ease-in")),
      transition("visible => hidden", animate("500ms 0s ease-out")),
    ]),
  ],
})
export class SnackbarComponent implements OnInit {
  message: string;

  constructor(public notificationService: NotificationService) {}

  snackVisibility = "hidden";

  ngOnInit() {
    this.notificationService.notifier
      .do( message=> {
        this.message = message;
        this.snackVisibility = "visible";
      })
      .switchMap((mesage) => Observable.timer(2000))
      .subscribe((timer) => (this.snackVisibility = "hidden"));
  }
}

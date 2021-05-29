import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
// Important Note about Route Observables
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };

  //Important Note about Route Observables
  paramsSubscripction: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetching Route Parameters
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    //Fetching Route Parameters Reactively
    this.paramsSubscripction = this.route.params.subscribe((params: Params) => {
      (this.user.id = params["id"]), (this.user.name = params["name"]);
    });
  }

  ngOnDestroy() {
    this.paramsSubscripction.unsubscribe();
  }
}

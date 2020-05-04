import { ApiService } from "./../_services/api.service";
import { Component, OnInit } from "@angular/core";
import { Cases } from "../_models/cases";

@Component({
  selector: "app-cases",
  templateUrl: "./cases.component.html",
  styleUrls: ["./cases.component.css"],
})
export class CasesComponent implements OnInit {
  displayedColumns: string[] = ["name", "age", "status"];
  data: Cases[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCases().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

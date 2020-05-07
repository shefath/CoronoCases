import { Component, OnInit } from "@angular/core";
import { Cases } from "../_models/cases";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../_services/api.service";

@Component({
  selector: "app-cases-details",
  templateUrl: "./cases-details.component.html",
  styleUrls: ["./cases-details.component.css"],
})
export class CasesDetailsComponent implements OnInit {
  cases: Cases = {
    id: null,
    name: "",
    gender: "",
    age: null,
    address: "",
    city: "",
    country: "",
    status: "",
    updated: null,
  };
  isLoadingResults = true;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  getCasesDetails(id: number) {
    this.api.getCasesById(id).subscribe((data: any) => {
      this.cases = data;
      //console.log("Test", this.cases);
      this.isLoadingResults = false;
    });
  }

  ngOnInit(): void {
    //this.getCasesDetails(+this.route.snapshot.params.id);
    this.route.data.subscribe(
      (data) => {
        const case1 = "case1";
        console.log("when case detail initiated case detail", data);

        this.cases = data[case1];

        this.isLoadingResults = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCases(id: number) {
    this.isLoadingResults = true;
    this.api.deleteCases(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.router.navigate(["/cases"]);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

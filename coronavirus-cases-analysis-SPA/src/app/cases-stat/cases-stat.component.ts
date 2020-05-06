import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { Statistic } from "../_models/statistic";
import { ApiService } from "../_services/api.service";

@Component({
  selector: "app-cases-stat",
  templateUrl: "./cases-stat.component.html",
  styleUrls: ["./cases-stat.component.css"],
})
export class CasesStatComponent implements OnInit {
  stats: Statistic[] = [];
  label = "Positive";
  isLoadingResults = true;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = "bar"; //doughnut, bar , line , pie
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], backgroundColor: [], label: this.label },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getStatistic(this.label);
  }

  getStatistic(status: string) {
    this.barChartData = [{ data: [], backgroundColor: [], label: this.label }];
    this.barChartLabels = [];
    this.api.getStatistic(status).subscribe(
      (res: any) => {
        this.stats = res;
        // console.log("stat", res);

        const chartdata: number[] = [];
        const chartcolor: string[] = [];
        chartdata.push(0);
        this.stats.forEach((stat) => {
          this.barChartLabels.push(stat.updated.toString().substr(0, 10));
          chartdata.push(stat.count);
          if (this.label === "Positive") {
            chartcolor.push("rgba(255, 165, 0, 0.5)");
          } else if (this.label === "Dead") {
            chartcolor.push("rgba(255, 0, 0, 0.5)");
          } else {
            chartcolor.push("rgba(0, 255, 0, 0.5)");
          }
        });
        //console.log("chartData", chartdata);
        //console.log("chart label", this.barChartLabels);

        this.barChartData = [
          { data: chartdata, backgroundColor: chartcolor, label: this.label },
        ];
        this.isLoadingResults = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  changeStatus() {
    this.isLoadingResults = true;
    this.getStatistic(this.label);
  }
}

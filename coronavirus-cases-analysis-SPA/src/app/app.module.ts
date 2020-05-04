import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AddCasesComponent } from "./add-cases/add-cases.component";
import { AppComponent } from "./app.component";
import { CasesDetailsComponent } from "./cases-details/cases-details.component";
import { CasesStatComponent } from "./cases-stat/cases-stat.component";
import { CasesComponent } from "./cases/cases.component";
import { EditCasesComponent } from "./edit-cases/edit-cases.component";

const routes: Routes = [
  {
    path: "cases",
    component: CasesComponent,
    data: { title: "List of Cases" },
  },
  {
    path: "cases-details/:id",
    component: CasesDetailsComponent,
    data: { title: "Cases Details" },
  },
  {
    path: "cases-stat",
    component: CasesStatComponent,
    data: { title: "Cases Statistic" },
  },
  {
    path: "add-cases",
    component: AddCasesComponent,
    data: { title: "Add Cases" },
  },
  {
    path: "edit-cases/:id",
    component: EditCasesComponent,
    data: { title: "Edit Cases" },
  },
  { path: "", redirectTo: "/cases", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CasesDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AddCasesComponent } from "./add-cases/add-cases.component";
import { AppComponent } from "./app.component";
import { CasesDetailsComponent } from "./cases-details/cases-details.component";
import { CasesStatComponent } from "./cases-stat/cases-stat.component";
import { CasesComponent } from "./cases/cases.component";
import { EditCasesComponent } from "./edit-cases/edit-cases.component";
import { ApiService } from "./_services/api.service";

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
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Cases } from "./../_models/cases";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ApiService } from "../_services/api.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-add-cases",
  templateUrl: "./add-cases.component.html",
  styleUrls: ["./add-cases.component.css"],
})
export class AddCasesComponent implements OnInit {
  casesForm: FormGroup;
  name = "";
  gender = "";
  age: number = null;
  address = "";
  city = "";
  country = "";
  status = "";
  statusList = ["Positive", "Dead", "Recovered"];
  genderList = ["male", "female"];
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCases(this.casesForm.value).subscribe(
      (res: Cases) => {
        const id = res.id != null ? res.id : 0;
        console.log("inside add form ", res);

        this.isLoadingResults = false;
        if (id != null && id > 0) {
          console.log("navigation section", id);

          this.router.navigate(["/cases-details", id]);
        }
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

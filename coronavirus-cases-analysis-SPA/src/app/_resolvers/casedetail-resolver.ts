import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Cases } from "./../_models/cases";
import { ApiService } from "./../_services/api.service";
import { catchError } from "rxjs/operators";

@Injectable()
export class CaseDetailResolver implements Resolve<Observable<Cases>> {
  constructor(private api: ApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Cases> {
    const id = "id";
    return this.api.getCasesById(route.params[id]).pipe(
      catchError((error) => {
        console.log("Problem Retriving Data (Cases)");
        this.router.navigate(["/cases"]);
        return of(null);
      })
    );
  }
}

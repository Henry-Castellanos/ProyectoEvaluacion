import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private API_SERVER = "http://localhost:8080/region";

  constructor(
    private httpClient: HttpClient

  ) { }

  public getAllRegiones():  Observable<any>{
    return this.httpClient.get(this.API_SERVER)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  url = '/api'
  constructor(private http: HttpClient) { }

  viewBuildings(): Observable<any> {
    return this.http.get(`/api/buildings`);
  }
  addBuilding(body:buildings): Observable<any> {
    return this.http.post(this.url,body);
  }

}

export interface buildings {

  nit_building: string,
  name_building: string,
  address_building: string,
  phone_building: string,
  email_building: string,
  administrator_code_fk: string
}

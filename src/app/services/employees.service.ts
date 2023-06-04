import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
//url = '/api';
url = 'https://pushy-small-drain.glitch.me/api'
  constructor(private http:HttpClient) { }

viewEmployees(){
return this.http.get(this.url);
  }
  deleteEmployee(id: any){
    return this.http.delete(`${this.url}/deleteEmployee/${id}`)
  }
  add_employee(_employees:employees) {
return this.http.post(this.url,_employees);
  }
  edit_employee(_Employees:employees, id:any) {
  return this.http.put(`${this.url}/editEmployee/${id}`,_Employees)
  }
  viewOnemployee(id: any){
return this.http.get(`${this.url}/viewEmployee/${id}`)
  }
  validation_employee(password:any, email:any){
    return this.http.get(`${this.url}/validation/${password}/${email}`)
  }
  button_employee(){
    return this.http.get(`${this.url}/button`)
  }
}


export interface employees {

  document_employee? : string,
  name_employee?: string,
  last_name_employee?: string,
  email_employee?: string,
  password_employee?: string,
  role_employee?: string
}




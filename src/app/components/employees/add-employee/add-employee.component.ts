import { Component, OnInit } from '@angular/core';
import { EmployeesService, employees } from "../../../services/employees.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: employees = {
    document_employee:'',
    name_employee: '',
    last_name_employee: '',
    email_employee: '',
    password_employee: '',
    role_employee: ''
  }
  constructor(private EmployeesService:EmployeesService, private Router:Router ) { }
  ngOnInit(): void {
   
  }
  registerEmployee(){
    this.EmployeesService.add_employee(this.addEmployee).subscribe(
      res => {
    this.message();
    this.Router.navigate(['empleados']);
      }
    )
  }
  
  message(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeesService, employees } from "../../../services/employees.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  edit_employee: employees = {
    document_employee: '',
    name_employee: '',
    last_name_employee: '',
    email_employee: '',
    password_employee: '',
    role_employee: ''
  }
  constructor(private EmployeesService: EmployeesService, private rutas: Router, private activeRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.viewEmployee();
  }
  viewEmployee() {
    const id = this.activeRouter.snapshot.params['id'];
    this.EmployeesService.viewOnemployee(id).subscribe(
      res => {

        let data = JSON.stringify(res);
        let result = JSON.parse(data);
        this.edit_employee = result[0];
        console.log(this.edit_employee.document_employee);
      }
    )
  }

  EditEmployee() {
    const id = this.activeRouter.snapshot.params['id'];
    this.EmployeesService.edit_employee(this.edit_employee, id).subscribe();
    this.message();
    this.rutas.navigate(['empleados'])
  }

  message() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Guardado',
      showConfirmButton: false,
      timer: 1500
    })
  }

}

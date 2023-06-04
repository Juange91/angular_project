import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmployeesService } from "../../services/employees.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public password = '';
  public email_ = '';

  constructor(private EmployeesService: EmployeesService, private Router: Router) { }
  ngOnInit(): void {

  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getError() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.email.hasError('email') ? 'Correo no valido' : '';
  }

  validation() {
    this.EmployeesService.validation_employee(this.password, this.email_).subscribe(
      res => {
        if (res == null) {
          this.message_error();
        } else {
          let data = JSON.stringify(res);
          let result = JSON.parse(data);
          this.Router.navigate([`/dashboard/${result.document_employee}`])
        }
      })
  }

  message_error() {
    Swal.fire({
      icon: 'error',
      text: 'Correo y cotraseña incorrectos!',
      showConfirmButton: false,
      timer: 1500
    })

  }

}

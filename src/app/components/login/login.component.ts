import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
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

}

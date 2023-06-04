import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from "../../services/employees.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{

  constructor(private EmployeesService:EmployeesService, private Router:Router  ) { }
  
  ngOnInit(): void {
    this.listEmployees();
  }

  displayedColumns: string[] = ['documento_empleado', 'nombre_empleado','apellido_empleado',
  'correo_empleado','rol_empleado','eliminar','editar'];
  dataSource = new MatTableDataSource();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource
    .filter = filterValue.trim().toLowerCase();
  }
 listEmployees(){
  this.EmployeesService.viewEmployees().subscribe(
    res => {
      console.log(res);
      this.dataSource.data = <any>res
    })
}

deleteEmployee(id: any){
  Swal.fire({
    title: 'Estas segur@?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.EmployeesService.deleteEmployee(id).subscribe(
        err=> console.log(err)
        );
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminad@',
          showConfirmButton: false,
          timer: 1500
        })
      this.listEmployees();
    }
  })

}
editEmployee(id: any){
  this.Router.navigate([`Editar_empleado/${id}`])
}
}

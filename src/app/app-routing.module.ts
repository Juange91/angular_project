import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { AddEmployeeComponent } from "./components/employees/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./components/employees/edit-employee/edit-employee.component";
import { BuildingsComponent } from "./components/buildings/buildings.component";
import { AddBuildingComponent } from "./components/buildings/add-building/add-building.component";


const routes: Routes = [
  {path: '' ,component:LoginComponent},
  {path: 'empleados', component:EmployeesComponent},
  {path: 'Nuevo_empleado', component:AddEmployeeComponent},
  {path: 'Editar_empleado/:id', component:EditEmployeeComponent},
  {path: 'edificios' , component:BuildingsComponent},
  {path: 'Nuevo_edificio', component:AddBuildingComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

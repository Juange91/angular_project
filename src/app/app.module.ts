import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './components/employees/employees.component';
import { MatDialogModule} from '@angular/material/dialog';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { MatSelectModule } from "@angular/material/select";
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { AddBuildingComponent } from "./components/buildings/add-building/add-building.component";
import { MaintenanceComponent } from './components/maintenance/maintenance.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    BuildingsComponent,
    AddBuildingComponent,
    MaintenanceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

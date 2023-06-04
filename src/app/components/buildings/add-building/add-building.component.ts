import { Component, OnInit } from '@angular/core';
import { BuildingsService,buildings } from "../../../services/buildings/buildings.service";

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  addBulding:buildings = {
    nit_building: '',
    name_building: '',
    address_building: '',
    phone_building: '',
    email_building: '',
    administrator_code_fk: ''
  }
constructor(private BuildingsService:BuildingsService){}

  ngOnInit(): void {
    
  }

  add_building(){
console.log(this.addBulding);

  }

}

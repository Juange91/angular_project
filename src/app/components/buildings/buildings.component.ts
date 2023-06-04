import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BuildingsService } from "../../services/buildings/buildings.service";

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  constructor(private BuildingsService:BuildingsService) { }
  ngOnInit(): void {
    this.list_buildings();
  }

  displayedColumns: string[] = ['nit_building', 'name_building', 
  'address_building','phone_building','email_building','administrator_name','eliminar', 'editar'];
  dataSource = new MatTableDataSource();
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource
    .filter = filterValue.trim().toLowerCase();
  }

  list_buildings(){
    this.BuildingsService.viewBuildings().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = <any>res
      })
  }

}

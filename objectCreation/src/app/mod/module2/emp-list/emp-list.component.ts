import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elist:Employee[]=[
    {
      empId:101,
      empName:"neeta",
    empAddr:{areaname:"karvenagar",cityname:'Pune'},
    empMobNo:'111111111'},

    {empId:102,
      empName:"Amit",
      empAddr:{areaname:"Rajapeth",cityname:'Amaravti'},
    empMobNo:'222222222'},

    {empId:103,
      empName:"Seeta",
      empAddr:{areaname:"Palaswadi",cityname:'yavatmal'},
    empMobNo:'333333333'},
  
  ]

}

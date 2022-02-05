import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emp1:Employee={
    empId:1,
    empName:"aaa",
    empAddr:{areaname:"karvenagar",cityname:'Pune'},
    empMobNo:'5252525252'
  }

  emp2:Employee={
    empId:2,
    empName:"bbb",
    empAddr:{areaname:"Sitabardi",cityname:'Nagpur'},
    empMobNo:'5623232323'
  }

}

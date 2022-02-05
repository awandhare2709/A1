import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  a:number=10;
  b:number=10.05;
  c:string="cjc";
  d:string='abc';
  e:boolean=true;
  f:boolean=false;
  g:any=859696856564;


}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stu1:Student=
  {rollno:1,
  name:'abc',
  addr:"Pune"
  }

  stu2:Student={
rollno:2,
name:"pqr",
addr:'Mumbai'
}

stulist:Student[]=[
  {rollno:3,
  name:"aaa",
  addr:'Sangli'},

{rollno:4,
  name:"bbb",
  addr:'satara'},

  this.stu1,
  this.stu2

]


n1:number[]=[2,23,1,45,1,8596]

}

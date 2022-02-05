import { Component, OnInit } from '@angular/core';
import { MobNo } from 'src/app/model/mob-no';
import { Teacher } from 'src/app/model/teacher';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  t1:Teacher=
  {
    tname:"abc",
    taddr:'pune',
    tmob:[
      {
      simcard:"airtel",
      mobno:"5252525252"
    },

    {
      simcard:"vodafone",
      mobno:"222222222"
    }
  
  ]


    

  }

}

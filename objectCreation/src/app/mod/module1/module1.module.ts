import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    StudentListComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule
  ],exports:[StudentListComponent,EmployeeListComponent],
})
export class Module1Module { }

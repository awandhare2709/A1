import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';



@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmpListComponent
  ],
  imports: [
    CommonModule
  ],exports:[EmployeeDetailsComponent,EmpListComponent]
})
export class Module2Module { }

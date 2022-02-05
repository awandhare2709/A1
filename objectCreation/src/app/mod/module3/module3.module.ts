import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';



@NgModule({
  declarations: [
    TeacherDetailsComponent
  ],
  imports: [
    CommonModule
  ],exports:[TeacherDetailsComponent]
})
export class Module3Module { }

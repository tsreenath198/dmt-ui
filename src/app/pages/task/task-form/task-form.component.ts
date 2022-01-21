import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public taskForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.taskForm = this.fb.group({
      
      employeeId: [''],
      category: [''],
      status: [''],
      estimatedTime  : [''],
      date: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.taskForm.value)
}
}

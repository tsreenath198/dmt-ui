import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public taskForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.taskForm = this.fb.group({
      id:[''],
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
navigateToParent(){
  this.router.navigate(['/dmt/task'])
}
}

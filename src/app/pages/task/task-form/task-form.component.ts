import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router, private toastr:NotificationService) { }
  public taskForm:FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.taskForm = this.fb.group({
      id:[''],
      employeeId: ['', Validators.required],
      category: [''],
      status: [''],
      estimatedTime  : [''],
      date: [''],
      description: [''],
    });
  }
createForm(){
  this.submitted = true;
    if (this.taskForm) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.taskForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "")
    }
}
navigateToParent(){
  this.router.navigate(['/dmt/task'])
}
 get taskFormControl(){
   return this.taskForm.controls
 }
}

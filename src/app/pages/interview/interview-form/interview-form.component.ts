import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css']
})
export class InterviewFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router,private toastr:NotificationService) { }
  public interviewForm:FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.interviewForm = this.fb.group({
      
      employeeId: [''],
      traineeId: ['', Validators.required],
      technologyId:[''],
      clientId: ['', Validators.required],
      interviewDate: ['' , Validators.required],
      endClient: [''],
      allotedTime  : [''],
      status: [''],
      paidStatus: ['', Validators.required],
      receivedStatus: ['', Validators.required],
      id: [''],
      description: [''],

    });
  }
createForm(){
  this.submitted = true;
  if(this.interviewForm.valid){
  this.toastr.showSuccess("Submitted Successfully !!", "")
  console.table(this.interviewForm.value);
  }
  else{
    this.toastr.showError("Please enter the details", "")
  }
}
navigateToParent() {
  this.router.navigate(['/dmt/interview']);
}
get interviewFormControl(){
  return this.interviewForm.controls;
}
}

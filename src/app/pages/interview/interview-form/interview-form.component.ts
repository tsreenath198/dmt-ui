import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css']
})
export class InterviewFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public interviewForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.interviewForm = this.fb.group({
      
      employeeId: [''],
      traineeId: [''],
      technologyId:[''],
      clientId: [''],
      interviewDate: [''],
      endClient: [''],
      allotedTime  : [''],
      status: [''],
      paidStatus: [''],
      receivedStatus: [''],
      id: [''],
      description: [''],

    });
  }
createForm(){
  console.log(this.interviewForm.value)
}
navigateToParent() {
  this.router.navigate(['/dmt/interview']);
}
}

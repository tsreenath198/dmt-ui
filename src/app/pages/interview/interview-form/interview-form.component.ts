import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css']
})
export class InterviewFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public interviewForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.interviewForm = this.fb.group({
      
      employeeId: [''],
      traineeId: [''],
      clientId: [''],
      interviewDate: [''],
      endclient: [''],
      allotedtime  : [''],
      status: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.interviewForm.value)
}
}
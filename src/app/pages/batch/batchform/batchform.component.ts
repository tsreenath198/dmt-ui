import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-batchform',
  templateUrl: './batchform.component.html',
  styleUrls: ['./batchform.component.css']
})
export class BatchformComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router, private toastr:NotificationService) { }
  public batchForm:FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.batchForm = this.fb.group({
      
      batch: ['', Validators.required],
      technologyId: [''],
      traineeId: [''],
      startDate: [''],
      endDate: [''],
      durationField  : [''],
      allottedTime: [''],
      status: [''],
      paidStatus: [''],
      receivedStatus: [''],
      id:[''],
      description: [''],
    });
  }
 
createForm(){
  this.submitted = true;
  if(this.batchForm){
  this.toastr.showSuccess("Submitted Successfully !!", "")
  console.table(this.batchForm.value);
  }
  else{
    this.toastr.showError("Please enter the details", "")
  }
}
navigateToParent() {
  this.router.navigate(['/dmt/batch']);
}
  get batchFormControl(){
    return this.batchForm.controls;
  }
}

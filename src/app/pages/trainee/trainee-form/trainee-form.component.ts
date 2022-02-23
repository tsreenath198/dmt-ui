import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.css']
})
export class TraineeFormComponent implements OnInit {
 

  constructor(private fb:FormBuilder,
    private router:Router,
    private toastr:NotificationService) { }
  public traineeForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.traineeForm = this.fb.group({
      name: ['', Validators.required],
      clientId: [''],
      skypeId: [''],
      alternativePhone: [''],
      email: [''],
      technologyId: [''],
      timeZone  : [''],
      phone: [''],
      batchId: [''],
      status: [''],
      paidStatus: [''],
      receivedStatus: [''],
      id: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.traineeForm.value)
  this.toastr.showSuccess("Submitted Successfully !!", "Trainee table")
}
  navigateToParent(){
    this.router.navigate(['/dmt/trainee'])
  }
}

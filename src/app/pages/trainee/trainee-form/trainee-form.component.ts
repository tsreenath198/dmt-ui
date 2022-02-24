import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', [Validators.required ,Validators.minLength(3)]),
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
  //console.log(this.traineeForm.value)
  if(this.traineeForm == null){
      this.toastr.showError(" Error !!", "")
  }
 else{
  this.toastr.showSuccess("Submitted Successfully !!", "")
 }
}
  navigateToParent(){
    this.router.navigate(['/dmt/trainee'])
  }
  get f(){
    return this.traineeForm.controls;
  }
}

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
  submitted = false;

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
      email: ['', Validators.required],
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
  this.submitted = true;
    if (this.traineeForm.valid) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.traineeForm.value)
    }
    else{
      this.toastr.showError("Please Enter the details !!", "")
    }
}
  navigateToParent(){
    this.router.navigate(['/dmt/trainee'])
  }
  get traineeFormControl(){
    return this.traineeForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {
submitted= false;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr:NotificationService) { }
  public trainerForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      technologyId: ['', Validators.required],
      employeeId: ['',Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      description: [''],
      id :[''],
    });
  }

  createForm() {
    this.submitted = true;
    if (this.trainerForm.valid) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.trainerForm.value)
    }
    else{
      this.toastr.showError("Please Enter the details !!", "")
    }
  }
 navigateToParent(){
   this.router.navigate(['/dmt/trainer'])
 }
 get trainerFormControl(){
   return this.trainerForm.controls
 }
}

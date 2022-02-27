import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router , private toastr:NotificationService) { }
  public clientForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      address: [''],
      description: [''],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  createForm() {
    this.submitted = true;
  if(this.clientForm){
  this.toastr.showSuccess("Submitted Successfully !!", "")
  console.table(this.clientForm.value);
  }
  else{
    this.toastr.showError("Please enter the details", "")
  }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/client']);
  }
  get clientFormControl(){
    return this.clientForm.controls
  }
}


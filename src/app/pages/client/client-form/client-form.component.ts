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

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      address: [''],
      description: [''],
      contact: [''],
      email: [''],
      designation: [''],
      phone: [''],
    });
  }

  createForm() {
    console.log(this.clientForm.value);
    this.toastr.showSuccess("Submitted Successfully !!", "")
  }
  navigateToParent() {
    this.router.navigate(['/dmt/client']);
  }
}


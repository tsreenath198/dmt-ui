import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router ) { }
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
  }
  navigateToParent() {
    this.router.navigate(['/dmt/client']);
  }
}


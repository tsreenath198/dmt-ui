import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
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

}


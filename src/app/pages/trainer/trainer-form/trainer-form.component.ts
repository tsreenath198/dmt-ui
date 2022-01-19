import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public trainerForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      technologyId: [''],
      employeeId: [''],
      phone: [''],
      email: [''],
      description: [''],
    });
  }

  createForm() {
    console.log(this.trainerForm.value);
  }

}

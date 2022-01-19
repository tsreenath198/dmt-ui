import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainee-form',
  templateUrl: './trainee-form.component.html',
  styleUrls: ['./trainee-form.component.css']
})
export class TraineeFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public traineeForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.traineeForm = this.fb.group({
      name: ['', Validators.required],
      clientId: [''],
      skypeId: [''],
      Alternativephone: [''],
      email: [''],
      technologyId: [''],
      timezone  : [''],
      phone: [''],
      batchId: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.traineeForm.value)
}
}

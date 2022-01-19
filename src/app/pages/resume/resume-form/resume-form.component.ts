import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public resumeForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      technologyId: [''],
      employeeId: [''],
      traineeId: [''],
      attachment: [''],
      description: [''],
    });
  }

  createForm() {
    console.log(this.resumeForm.value);
  }

}

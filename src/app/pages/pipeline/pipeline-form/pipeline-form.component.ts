import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipeline-form',
  templateUrl: './pipeline-form.component.html',
  styleUrls: ['./pipeline-form.component.css']
})
export class PipelineFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public pipelineForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.pipelineForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: [''],
      requirements: [''],
      description: [''],
    });
  }

  createForm() {
    console.log(this.pipelineForm.value);
  }

}


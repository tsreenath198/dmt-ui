import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-pipeline-form',
  templateUrl: './pipeline-form.component.html',
  styleUrls: ['./pipeline-form.component.css']
})
export class PipelineFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router, private toastr:NotificationService) { }
  public pipelineForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.pipelineForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      requirements: ['', Validators.required],
      description: [''],
    });
  }

  createForm() {
    this.submitted = true;
    if (this.pipelineForm.valid) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.pipelineForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "")
    }
  }
  navigateToParent(){
    this.router.navigate(['/dmt/pipeline'])
  }
  get pipelineFormControl(){
    return this.pipelineForm.controls;
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  ;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public resumeForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      employeeId: [''],
      traineeId: ['', Validators.required],
      date: [''],
      paidStatus: ['', Validators.required],
      receivedStatus: ['', Validators.required],
      description: [''],
      id: [''],
    });
  }

  createForm() {
    this.submitted = true;
    if (this.resumeForm.valid) {
      this.toastr.showSuccess("Submitted Successfully", "Resume")
      console.table(this.resumeForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "Resume")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/resume']);
  }

  
  get resumeFormControl() {
    return this.resumeForm.controls
  }
}

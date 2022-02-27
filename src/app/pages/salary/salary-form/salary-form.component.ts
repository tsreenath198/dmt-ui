import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public salaryForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.salaryForm = this.fb.group({

      employeeId: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      salary: [''],
      description: [''],
    });
  }
  createForm() {
    this.submitted = true;
    if (this.salaryForm) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.salaryForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/salary']);
  }
  get salaryFormControl(){
    return this.salaryForm.controls
  }
}
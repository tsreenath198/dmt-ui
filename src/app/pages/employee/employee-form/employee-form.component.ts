import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public employeeForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      invoiceNo: [''],
      traineeId: [''],
      actualAmount: [''],
      receivedAmount: [''],
      receivedDate: [''],
      supportStartDate: [''],
      supportEndDate: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      id: [''],
      description: [''],
    });
  }

  createForm() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      this.toastr.showSuccess("Submitted Successfully", "Employee")
      console.table(this.employeeForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "Employee")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/employee']);
  }
  get employeeFormControl() {
    return this.employeeForm.controls;
  }
}

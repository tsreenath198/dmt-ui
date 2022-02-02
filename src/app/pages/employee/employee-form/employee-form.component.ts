import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public employeeForm: FormGroup;

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
      phone: [''],
      email: [''],
      id:[''],
      description: [''],
    });
  }

  createForm() {
    console.log(this.employeeForm.value);
  }

}

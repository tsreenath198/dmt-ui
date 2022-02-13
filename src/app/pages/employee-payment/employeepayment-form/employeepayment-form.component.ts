import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeepayment-form',
  templateUrl: './employeepayment-form.component.html',
  styleUrls: ['./employeepayment-form.component.css']
})
export class EmployeepaymentFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public employeePaymentForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.employeePaymentForm = this.fb.group({
      
      employeeId: [''],
      monthYear: [''],
      trainingPeriod: [''],
      supportPeriod: [''],
      preparation: [''],
      misc: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.employeePaymentForm.value)
}
  navigateToParent(){
    this.router.navigate(['/dmt/employeepayment'])
  }
}


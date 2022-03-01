import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-employeepayment-form',
  templateUrl: './employeepayment-form.component.html',
  styleUrls: ['./employeepayment-form.component.css']
})
export class EmployeepaymentFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router, private toastr:NotificationService) { }
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
  this.toastr.showSuccess("Submitted Successfully !!", "Invoice")
}
  navigateToParent(){
    this.router.navigate(['/dmt/employeepayment'])
  }
}


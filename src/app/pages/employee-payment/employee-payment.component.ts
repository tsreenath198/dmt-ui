import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { EmployeePaymentModel } from 'app/models/employeePayment-model';
import { EmployeepaymentService } from 'app/services/employeepayment/employeepayment.service';

@Component({
  selector: 'app-employee-payment',
  templateUrl: './employee-payment.component.html',
  styleUrls: ['./employee-payment.component.css']
})
export class EmployeePaymentComponent implements OnInit {

public employeepaymentDataSource:EmployeePaymentModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private employeepaymentService:EmployeepaymentService) { }

  ngOnInit(): void {
    this.getEmployeepaymentData();
  }
  getEmployeepaymentData() {
    this.employeepaymentService.getMockData().subscribe((result:EmployeePaymentModel[]) =>{
      this.employeepaymentDataSource = result;
    })
  }
  onAddClick() {
    console.log("Add")
  }
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.EMPLOYEEPAYMENT_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.EMPLOYEEPAYMENT_UPDATE,1])
  }
}

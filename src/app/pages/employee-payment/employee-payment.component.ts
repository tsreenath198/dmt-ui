import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { EmployeePaymentModel } from 'app/models/employeePayment-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
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
    private employeepaymentService:EmployeepaymentService, private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getEmployeepaymentData();
  }
  getEmployeepaymentData() {
    this.employeepaymentService.getMockData().subscribe((result:EmployeePaymentModel[]) =>{
      this.employeepaymentDataSource = result;
    })
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
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.employeepaymentDataSource = this.employeepaymentDataSource.filter(technology => technology.id !== id);;
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

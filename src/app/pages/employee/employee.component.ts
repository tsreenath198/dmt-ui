import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { EmployeeModel } from 'app/models/employee-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { EmployeeService } from 'app/services/employee/employee.service';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeDataSource:EmployeeModel[];
  public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private employeeService:EmployeeService ,private  confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.employeeService.getMockData().subscribe((result:EmployeeModel[]) =>{
      this.employeeDataSource = result;
    })
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.EMPLOYEE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.EMPLOYEE_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.employeeDataSource = this.employeeDataSource.filter(employee => employee.id !== id);
          this.toastr.showSuccess("Deleted successfully", "Employee")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { EmployeeModel } from 'app/models/employee-model';
import { EmployeeService } from 'app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employeeDataSource:EmployeeModel[];
  public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    this.employeeService.getMockData().subscribe((result:EmployeeModel[]) =>{
      this.employeeDataSource = result;
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
    this.router.navigate([this.routeConstants.EMPLOYEE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.EMPLOYEE_UPDATE,1])
  }
}

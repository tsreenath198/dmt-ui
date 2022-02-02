import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { SalaryModel } from 'app/models/salary-model';
import { SalaryService } from 'app/services/salary/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

public salaryDataSource:SalaryModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private salaryService:SalaryService) { }

  ngOnInit(): void {
    this.getSalaryData();
  }
  getSalaryData() {
    this.salaryService.getMockData().subscribe((result:SalaryModel[]) =>{
      this.salaryDataSource = result;
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
    this.router.navigate([this.routeConstants.SALARY_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.SALARY_UPDATE,1])
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaryModel } from 'app/models/salary-model';
import { SalaryService } from 'app/services/salary/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

public salaryDataSource:SalaryModel[];

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
    this.router.navigate(['/salary/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/salary/update',1])
  }
}


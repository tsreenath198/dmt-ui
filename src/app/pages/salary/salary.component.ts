import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { SalaryModel } from 'app/models/salary-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
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
    private salaryService:SalaryService , private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getSalaryData();
  }
  getSalaryData() {
    this.salaryService.getMockData().subscribe((result:SalaryModel[]) =>{
      this.salaryDataSource = result;
    })
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
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.salaryDataSource = this.salaryDataSource.filter(salary => salary.id !== id);;
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}


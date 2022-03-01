import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { SupportModel } from 'app/models/support-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { SupportService } from 'app/services/support/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

 public supportDataSource: SupportModel[];
 public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private supportService:SupportService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getSupportData();
  }
  getSupportData() {
    this.supportService.getMockData().subscribe((result:SupportModel[]) =>{
      this.supportDataSource = result ;
    })
  }
   onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.SUPPORT_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.SUPPORT_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.supportDataSource = this.supportDataSource.filter(support => support.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "Support")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }

}

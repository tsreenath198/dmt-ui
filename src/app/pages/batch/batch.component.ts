import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { BatchModel } from 'app/models/batch-model';
import { BatchService } from 'app/services/batch/batch.service';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  
  public batchDataSource: BatchModel[];
  public routeConstants = new RouteConstants();
  

 constructor(private router:Router,
  private batchService:BatchService , private confirmationDialogService:ConfirmationDialogService ,private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getBatchData();
  }
  getBatchData() {
    this.batchService.getMockData().subscribe((result:BatchModel[]) => {
      this.batchDataSource = result;
    })
  }

  
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.BATCH_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.BATCH_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : '+ id)
      .then((confirmed) => {
        if (confirmed) {
          this.batchDataSource = this.batchDataSource.filter(technology => technology.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }

}

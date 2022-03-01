import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { QuetionModel } from 'app/models/quetion-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { QuetionService } from 'app/services/quetion/quetion.service';

@Component({
  selector: 'app-quetion',
  templateUrl: './quetion.component.html',
  styleUrls: ['./quetion.component.css']
})
export class QuetionComponent implements OnInit {

public quetionDataSource:QuetionModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private quetionService:QuetionService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getQuetionData();
  }
  getQuetionData() {
    this.quetionService.getMockData().subscribe((result:QuetionModel[]) =>{
      this.quetionDataSource = result ;
    })
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.QUETION_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.QUETION_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.quetionDataSource = this.quetionDataSource.filter(quetion => quetion.id !== id);
          this.toastr.showSuccess("Deleted successfully", "Quetion")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

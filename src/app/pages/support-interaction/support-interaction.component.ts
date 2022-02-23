import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { supportInteractionModel } from 'app/models/supportInteraction-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { SupportinteractionService } from 'app/services/supportinteraction/supportinteraction.service';

@Component({
  selector: 'app-support-interaction',
  templateUrl: './support-interaction.component.html',
  styleUrls: ['./support-interaction.component.css']
})
export class SupportInteractionComponent implements OnInit {

  public supportinteractionDataSource: supportInteractionModel[];
  public routeConstants = new RouteConstants();

  constructor(private router: Router,
    private supportinteractionService: SupportinteractionService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }
  ngOnInit(): void {
    this.getSupportinteractionData();
  }
  getSupportinteractionData() {
    this.supportinteractionService.getMockData().subscribe((result: supportInteractionModel[]) => {
      this.supportinteractionDataSource = result;
    })
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm() {
    this.router.navigate([this.routeConstants.SUPPORTINTERACTION_CREATE])
  }
  navigateToUpdateForm() {
    this.router.navigate([this.routeConstants.SUPPORTINTERACTION_UPDATE, 1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.supportinteractionDataSource = this.supportinteractionDataSource.filter(technology => technology.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

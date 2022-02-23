import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { ClientModel } from 'app/models/client-model';
import { ClientService } from 'app/services/client/client.service';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clientDataSource: ClientModel[];
  public routeConstants = new RouteConstants();

  constructor(private router: Router,
    private clientService: ClientService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getClientData()
  }
  getClientData() {
    this.clientService.getMockData().subscribe((result: ClientModel[]) => {
      this.clientDataSource = result;
    })
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm() {
    this.router.navigate([this.routeConstants.CLIENT_CREATE])
  }
  navigateToUpdateForm() {
    this.router.navigate([this.routeConstants.CLIENT_UPDATE, 1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : '+ id)
      .then((confirmed) => {
        if (confirmed) {
          this.clientDataSource = this.clientDataSource.filter(technology => technology.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }

}

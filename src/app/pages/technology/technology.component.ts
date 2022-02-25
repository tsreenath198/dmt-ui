import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TechnologyModel } from 'app/models/technology-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { TechnologyService } from 'app/services/technology/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technologyDataSource: TechnologyModel[];
  public routeConstants = new RouteConstants();

  constructor(private router: Router,
    private technologyService: TechnologyService, private confirmationDialogService: ConfirmationDialogService, private toastr:NotificationService) { }

  serachString: string = " ";
  _technologyDataSource: TechnologyModel;

  ngOnInit(): void {
    this.getTechnologyData();
  }

  getTechnologyData() {
    this.technologyService.getMockData().subscribe((result: TechnologyModel[]) => {
      this.technologyDataSource = result;
    })
  }

  onAddClick() {
    console.log("Add")
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm() {
    this.router.navigate([this.routeConstants.TECHNOLOGY_CREATE])
  }
  navigateToUpdateForm(id: number) {
    this.router.navigate([this.routeConstants.TECHNOLOGY_UPDATE, id])
  }



  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete Id : '+ id )
      .then((confirmed) => {
        if (confirmed) {
          this.technologyDataSource = this.technologyDataSource.filter(technology => technology.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}



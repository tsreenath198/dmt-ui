import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TraineeModel } from 'app/models/trainee-model';
import { TrainerModel } from 'app/models/trainer-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { TrainerService } from 'app/services/trainer/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

    public trainerDataSource:TrainerModel[];
    public routeConstants= new RouteConstants();
  
  constructor(private router:Router ,
    private trainerService:TrainerService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }
  ngOnInit(): void {
    this.getTrainerData()
  }

  getTrainerData() {
    this.trainerService.getMockData().subscribe((result:TrainerModel[]) =>{
      this.trainerDataSource = result ;
    })
  }

  onAddClick() {
    console.log("Add")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.TRAINER_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.TRAINER_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : '+ id)
      .then((confirmed) => {
        if (confirmed) {
          this.trainerDataSource = this.trainerDataSource.filter(technology => technology.id !== id);;
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TraineeModel } from 'app/models/trainee-model';
import { TrainerModel } from 'app/models/trainer-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { TraineeService } from 'app/services/trainee/trainee.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

public traineeDataSource: TraineeModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private traineeService:TraineeService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getTraineeData()
      
    
  }
  getTraineeData() {
    this.traineeService.getMockData().subscribe((result:TraineeModel[]) =>{
      this.traineeDataSource = result;
    })
  }

//   showToasterSuccess(){
//     this.toastr.showSuccess("Data shown successfully !!", "tutsmake.com")
// }
  onAddClick() {
    console.log("Add")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.TRAINEE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.TRAINEE_UPDATE,1])
  }
  
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : '+ id)
      .then((confirmed) => {
        
        if (confirmed) {
          this.traineeDataSource = this.traineeDataSource.filter(trainee => trainee.id !== id);;
          this.toastr.showSuccess("Deleted successfully", "Trainee")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
 
}

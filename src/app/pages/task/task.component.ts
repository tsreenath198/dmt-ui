import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TaskModel } from 'app/models/task-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
import { TaskService } from 'app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public taskDataSource:TaskModel[];
  public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private taskService:TaskService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getTaskData();
  }
  getTaskData() {
    this.taskService.getMockData().subscribe((result:TaskModel[]) =>{
      this.taskDataSource = result ;
    })
  }
  
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.TASK_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.TASK_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.taskDataSource = this.taskDataSource.filter(task => task.id !== id);
          this.toastr.showSuccess("Deleted successfully", "Task")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}


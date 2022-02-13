import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TaskModel } from 'app/models/task-model';
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
    private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTaskData();
  }
  getTaskData() {
    this.taskService.getMockData().subscribe((result:TaskModel[]) =>{
      this.taskDataSource = result ;
    })
  }
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.TASK_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.TASK_UPDATE,1])
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from 'app/models/task-model';
import { TaskService } from 'app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public taskDataSource:TaskModel[];

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
    this.router.navigate(['/task/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/task/update',1])
  }
}


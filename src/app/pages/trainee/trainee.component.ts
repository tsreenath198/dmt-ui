import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { TraineeModel } from 'app/models/trainee-model';
import { TrainerModel } from 'app/models/trainer-model';
import { TraineeService } from 'app/services/trainee/trainee.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

public traineeDataSource: TraineeModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private traineeService:TraineeService) { }

  ngOnInit(): void {
    this.getTraineeData()
      
    
  }
  getTraineeData() {
    this.traineeService.getMockData().subscribe((result:TraineeModel[]) =>{
      this.traineeDataSource = result;
    })
  }

  
  onAddClick() {
    console.log("Add")
  }
  onDeleteClick() {
    console.log("delete")
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
  
}

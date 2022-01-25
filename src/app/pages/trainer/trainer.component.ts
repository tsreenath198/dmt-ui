import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeModel } from 'app/models/trainee-model';
import { TrainerModel } from 'app/models/trainer-model';
import { TrainerService } from 'app/services/trainer/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

    public trainerDataSource:TrainerModel[];
  
  constructor(private router:Router ,
    private trainerService:TrainerService) { }
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
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate(['/trainer/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/trainer/update',1])
  }
}

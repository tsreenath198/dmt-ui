import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuetionModel } from 'app/models/quetion-model';
import { QuetionService } from 'app/services/quetion/quetion.service';

@Component({
  selector: 'app-quetion',
  templateUrl: './quetion.component.html',
  styleUrls: ['./quetion.component.css']
})
export class QuetionComponent implements OnInit {

public quetionDataSource:QuetionModel[];

  constructor(private router:Router,
    private quetionService:QuetionService) { }

  ngOnInit(): void {
    this.getQuetionData();
  }
  getQuetionData() {
    this.quetionService.getMockData().subscribe((result:QuetionModel[]) =>{
      this.quetionDataSource = result ;
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
    this.router.navigate(['/quetion/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/quetion/update',1])
  }
}

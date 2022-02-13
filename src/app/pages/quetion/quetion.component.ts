import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { QuetionModel } from 'app/models/quetion-model';
import { QuetionService } from 'app/services/quetion/quetion.service';

@Component({
  selector: 'app-quetion',
  templateUrl: './quetion.component.html',
  styleUrls: ['./quetion.component.css']
})
export class QuetionComponent implements OnInit {

public quetionDataSource:QuetionModel[];
public routeConstants = new RouteConstants();

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
    this.router.navigate([this.routeConstants.QUETION_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.QUETION_UPDATE,1])
  }
}

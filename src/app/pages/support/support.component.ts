import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { SupportModel } from 'app/models/support-model';
import { SupportService } from 'app/services/support/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

 public supportDataSource: SupportModel[];
 public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private supportService:SupportService) { }

  ngOnInit(): void {
    this.getSupportData();
  }
  getSupportData() {
    this.supportService.getMockData().subscribe((result:SupportModel[]) =>{
      this.supportDataSource = result ;
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
    this.router.navigate([this.routeConstants.SUPPORT_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.SUPPORT_UPDATE,1])
  }
}

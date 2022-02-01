import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { BatchModel } from 'app/models/batch-model';
import { BatchService } from 'app/services/batch/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  
  public batchDataSource: BatchModel[];
  public routeConstants = new RouteConstants();
  

 constructor(private router:Router,
  private batchService:BatchService) { }

  ngOnInit(): void {
    this.getBatchData();
  }
  getBatchData() {
    this.batchService.getMockData().subscribe((result:BatchModel[]) => {
      this.batchDataSource = result;
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
    this.router.navigate([this.routeConstants.BATCH_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.BATCH_UPDATE,1])
  }
}

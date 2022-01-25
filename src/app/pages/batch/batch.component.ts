import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatchModel } from 'app/models/batch-model';
import { BatchService } from 'app/services/batch/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  
  public batchDataSource: BatchModel[];
  

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
    this.router.navigate(['/batch/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/batch/update',1])
  }
}

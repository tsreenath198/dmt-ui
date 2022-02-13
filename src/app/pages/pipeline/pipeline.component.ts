import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { PipelineModel } from 'app/models/pipeline-model';
import { PipelineService } from 'app/services/pipeline/pipeline.service';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

public pipelineDataSource:PipelineModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private pipelineService:PipelineService) { }

  ngOnInit(): void {
    this.getPipelineData();
  }
  getPipelineData() {
    this.pipelineService.getMockData().subscribe((result:PipelineModel[]) =>{
      this.pipelineDataSource = result;
    })
  }
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.PIPELINE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.PIPELINE_UPDATE,1])
  }
}

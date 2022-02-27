import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { PipelineModel } from 'app/models/pipeline-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { NotificationService } from 'app/services/notification/notification.service';
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
    private pipelineService:PipelineService, private confirmationDialogService:ConfirmationDialogService , private toastr:NotificationService) { }

  ngOnInit(): void {
    this.getPipelineData();
  }
  getPipelineData() {
    this.pipelineService.getMockData().subscribe((result:PipelineModel[]) =>{
      this.pipelineDataSource = result;
    })
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.PIPELINE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.PIPELINE_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.pipelineDataSource = this.pipelineDataSource.filter(pipeline => pipeline.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

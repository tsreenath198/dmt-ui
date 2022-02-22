import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { InterviewModel } from 'app/models/interview-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { InterviewService } from 'app/services/interview/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  public interviewDataSource:InterviewModel[];
  public routeConstants= new RouteConstants();

  constructor(private router:Router,
    private interviewService:InterviewService , private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getInterviewData();
  }
  getInterviewData() {
    this.interviewService.getMockData().subscribe((result:InterviewModel[]) =>{
      this.interviewDataSource = result ;
    })
  }

  
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.INTERVIEW_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.INTERVIEW_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : '+ id)
      .then((confirmed) => {
        if (confirmed) {
          this.interviewDataSource = this.interviewDataSource.filter(technology => technology.id !== id);;
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }

}

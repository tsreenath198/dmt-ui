import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewModel } from 'app/models/interview-model';
import { InterviewService } from 'app/services/interview/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  public interviewDataSource:InterviewModel[];

  constructor(private router:Router,
    private interviewService:InterviewService) { }

  ngOnInit(): void {
    this.getInterviewData();
  }
  getInterviewData() {
    this.interviewService.getMockData().subscribe((result:InterviewModel[]) =>{
      this.interviewDataSource = result ;
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
    this.router.navigate(['/interview/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/interview/update',1])
  }
}

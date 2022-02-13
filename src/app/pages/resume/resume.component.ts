import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { ResumeModel } from 'app/models/resume-model';
import { ResumeService } from 'app/services/resume/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public resumeDataSource:ResumeModel[];
  public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private resumeService:ResumeService) { }

  ngOnInit(): void {
    this.getResumeData();
  }
  getResumeData() {
    this.resumeService.getMockData().subscribe((result:ResumeModel[]) =>{
      this.resumeDataSource = result;
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
    this.router.navigate([this.routeConstants.RESUME_CREATE])
  }
  navigateToUpdateForm(id:number){
    this.router.navigate([this.routeConstants.RESUME_UPDATE,id])
  }
}

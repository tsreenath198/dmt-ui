import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { ResumeModel } from 'app/models/resume-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
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
    private resumeService:ResumeService , private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getResumeData();
  }
  getResumeData() {
    this.resumeService.getMockData().subscribe((result:ResumeModel[]) =>{
      this.resumeDataSource = result;
    })
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
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.resumeDataSource = this.resumeDataSource.filter(technology => technology.id !== id);;
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

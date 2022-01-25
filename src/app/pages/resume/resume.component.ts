import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeModel } from 'app/models/resume-model';
import { ResumeService } from 'app/services/resume/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public resumeDataSource:ResumeModel[];

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
    this.router.navigate(['/resume/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/resume/update',1])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { CourseModel } from 'app/models/course-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { CourseService } from 'app/services/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

public courseDataSourse:CourseModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private courseService:CourseService, private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getCourseData();
  }
  getCourseData() {
    this.courseService.getMockData().subscribe((result:CourseModel[]) =>{
      this.courseDataSourse = result;
    })
  }

  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.COURSE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.COURSE_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.courseDataSourse = this.courseDataSourse.filter(technology => technology.id !== id);;
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

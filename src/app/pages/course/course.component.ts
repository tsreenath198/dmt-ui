import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { CourseModel } from 'app/models/course-model';
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
    private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCourseData();
  }
  getCourseData() {
    this.courseService.getMockData().subscribe((result:CourseModel[]) =>{
      this.courseDataSourse = result;
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
    this.router.navigate([this.routeConstants.COURSE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.COURSE_UPDATE,1])
  }
}

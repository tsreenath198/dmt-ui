import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from 'app/models/course-model';
import { CourseService } from 'app/services/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

public courseDataSourse:CourseModel[];

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
    this.router.navigate(['/course/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/course/update',1])
  }
}

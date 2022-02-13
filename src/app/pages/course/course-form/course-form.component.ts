import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router) { }
  public courseForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      technologyId: [''],
      estimatedHours: [''],
      description: [''],
    });
  }

  createForm() {
    console.log(this.courseForm.value);
  }
  navigateToParent(){
    this.router.navigate(['/dmt/course'])
  }
}
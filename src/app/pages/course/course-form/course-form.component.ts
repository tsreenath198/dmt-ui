import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router, private toastr:NotificationService) { }
  public courseForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      technologyId: ['', Validators.required],
      estimatedHours: [''],
      description: [''],
    });
  }

  createForm() {
    this.submitted = true;
    if(this.courseForm.valid){
    this.toastr.showSuccess("Submitted Successfully !!", "")
    console.table(this.courseForm.value);
    }
    else{
      this.toastr.showError("Please enter the details", "")
    }
  }
  navigateToParent(){
    this.router.navigate(['/dmt/course'])
  }
  get courseFormControl(){
    return this.courseForm.controls;
  }
}
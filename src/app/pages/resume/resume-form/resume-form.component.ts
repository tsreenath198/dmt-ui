import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  ;

  constructor(private fb: FormBuilder,
    private router:Router) { }
  public resumeForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.resumeForm = this.fb.group({
      employeeId: [''],
      traineeId: [''],
      date: [''],
      paidStatus: [''],
      receivedStatus: [''],
      description: [''],
      id: [''],
    });
  }

  createForm() {
    console.log(this.resumeForm.value);
  }
  navigateToParent() {
    this.router.navigate(['/dmt/resume']);
  }
}

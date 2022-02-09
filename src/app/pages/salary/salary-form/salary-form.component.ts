import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public salaryForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.salaryForm = this.fb.group({
      
      employeeId: [''],
      month: [''],
      year: [''],
      salary  : [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.salaryForm.value)
}
navigateToParent() {
  this.router.navigate(['/dmt/salary']);
}
}
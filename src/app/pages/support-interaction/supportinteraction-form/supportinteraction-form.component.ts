import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supportinteraction-form',
  templateUrl: './supportinteraction-form.component.html',
  styleUrls: ['./supportinteraction-form.component.css']
})
export class SupportinteractionFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public supportinteractionForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.supportinteractionForm = this.fb.group({
      
      traineeId: [''],
      trainerId: [''],
      date: [''],
      lead: [''],
      count: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.supportinteractionForm.value)
}
navigateToParent(){
  this.router.navigate(['/dmt/supportinteraction'])
}
}

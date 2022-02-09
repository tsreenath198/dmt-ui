import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batchform',
  templateUrl: './batchform.component.html',
  styleUrls: ['./batchform.component.css']
})
export class BatchformComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public batchForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.batchForm = this.fb.group({
      
      batch: [''],
      technologyId: [''],
      traineeId: [''],
      startDate: [''],
      endDate: [''],
      durationField  : [''],
      allottedTime: [''],
      status: [''],
      paidStatus: [''],
      receivedStatus: [''],
      id:[''],
      description: [''],
    });
  }
createForm(){
  console.log(this.batchForm.value)
}
navigateToParent() {
  this.router.navigate(['/dmt/batch']);
}
}

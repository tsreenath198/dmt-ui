import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public supportForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.supportForm = this.fb.group({
      
      employeeId: [''],
      traineeId: [''],
      clientId: [''],
      startDate: [''],
      durationField: [''],
      endDate: [''],
      endclient: [''],
      allotedtime  : [''],
      technologyUsed: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.supportForm.value)
}
}


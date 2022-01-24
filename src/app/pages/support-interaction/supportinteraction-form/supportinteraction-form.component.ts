import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supportinteraction-form',
  templateUrl: './supportinteraction-form.component.html',
  styleUrls: ['./supportinteraction-form.component.css']
})
export class SupportinteractionFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
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
}

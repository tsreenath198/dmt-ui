import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-quetion-form',
  templateUrl: './quetion-form.component.html',
  styleUrls: ['./quetion-form.component.css']
})
export class QuetionFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public quetionForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.quetionForm = this.fb.group({
      clientId: [''],
      quetion: [''],
      answers: [''],
      description: ['']                                                                                                                   
    });
  }

  createForm(){
    console.log(this.quetionForm.value);
  }

}

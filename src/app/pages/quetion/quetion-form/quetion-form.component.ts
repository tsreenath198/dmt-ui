import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quetion-form',
  templateUrl: './quetion-form.component.html',
  styleUrls: ['./quetion-form.component.css']
})
export class QuetionFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router) { }
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
  navigateToParent(){
    this.router.navigate(['/dmt/quetion'])
  }
}

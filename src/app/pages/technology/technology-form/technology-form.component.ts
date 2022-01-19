import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css']
})
export class TechnologyFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  public technologyForm:FormGroup
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.technologyForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }
createForm(){
  console.log(this.technologyForm.value)
}
}

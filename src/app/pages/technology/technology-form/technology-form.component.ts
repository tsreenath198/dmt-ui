import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css']
})
export class TechnologyFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private router: Router) {
  }
  public technologyForm: FormGroup
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.technologyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      id: [''],
    });
  }
  createForm() {
    console.log(this.technologyForm.value)
  }
  navigateToParent() {
    this.router.navigate(['/dmt/technology']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-technology-form',
  templateUrl: './technology-form.component.html',
  styleUrls: ['./technology-form.component.css']
})
export class TechnologyFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private router: Router, private toastr:NotificationService) {
  }
  public technologyForm: FormGroup
  submitted = false;
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
    this.submitted = true;
    if (this.technologyForm.valid) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.technologyForm.value)
    }
    else{
      this.toastr.showError("Please Enter the details !!", "")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/technology']);
  }
  get technologyFormControl(){
    return this.technologyForm.controls;
  }
}

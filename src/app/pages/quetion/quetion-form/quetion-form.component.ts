import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-quetion-form',
  templateUrl: './quetion-form.component.html',
  styleUrls: ['./quetion-form.component.css']
})
export class QuetionFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public quetionForm: FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.quetionForm = this.fb.group({
      endClient: ['', Validators.required],
      quetion: ['', Validators.required],
      answers: [''],
      description: ['']
    });
  }

  createForm() {
    this.submitted = true;
    if (this.quetionForm.valid) {
      this.toastr.showSuccess("Submitted Successfully", "Quetion")
      console.table(this.quetionForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "Quetion")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/quetion'])
  }
  get quetionFormControl() {
    return this.quetionForm.controls;
  }
}

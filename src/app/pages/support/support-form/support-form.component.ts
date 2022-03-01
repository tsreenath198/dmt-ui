import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public supportForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.supportForm = this.fb.group({
      trainerId: ['', Validators.required],
      traineeId: ['', Validators.required],
      paidBy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      endClient: [''],
      allotedTime: [''],
      paidStatus: ['', Validators.required],
      receivedStatus: ['', Validators.required],
      status: [''],
      technologyUsed: [''],
      id: [''],
      description: [''],
    });
  }
  createForm() {
    this.submitted = true;
    if (this.supportForm.valid) {
      this.toastr.showSuccess("Submitted Successfully", "support")
      console.table(this.supportForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "support")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/support']);
  }
  get supportFormControl() {
    return this.supportForm.controls;
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router:Router ,private toastr:NotificationService) { }
  public supportForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.supportForm = this.fb.group({

      trainerId: [''],
      traineeId: [''],
      paidBy: [''],
      startDate: [''],
      endDate: [''],
      endClient: [''],
      allotedTime: [''],
      paidStatus: [''],
      receivedStatus: [''],
      status: [''],
      technologyUsed: [''],
      id: [''],
      description: [''],
    });
  }
  createForm() {
    console.log(this.supportForm.value);
    this.toastr.showSuccess("Submitted Successfully !!", "")
  }
  navigateToParent() {
    this.router.navigate(['/dmt/support']);
  }
}


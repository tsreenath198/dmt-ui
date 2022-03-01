import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-supportinteraction-form',
  templateUrl: './supportinteraction-form.component.html',
  styleUrls: ['./supportinteraction-form.component.css']
})
export class SupportinteractionFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router, private toastr:NotificationService) { }
  public supportinteractionForm:FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.supportinteractionForm = this.fb.group({
      
      traineeId: ['', Validators.required],
      trainerId: ['', Validators.required],
      date: [''],
      lead: ['', Validators.required],
      count: [''],
      description: [''],
    });
  }
createForm(){
  this.submitted = true;
    if (this.supportinteractionForm.valid) {
      this.toastr.showSuccess("Submitted Successfully", "Support Interaction")
      console.table(this.supportinteractionForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "Support Interaction")
    }
}
navigateToParent(){
  this.router.navigate(['/dmt/supportinteraction'])
}
get supportinteractionFormControl(){
  return this.supportinteractionForm.controls
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: NotificationService) { }
  public invoiceForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.invoiceForm = this.fb.group({

      no: ['', Validators.required],
      traineeId: [''],
      actualAmount: [''],
      receivedAmount: [''],
      receivedDate: ['', Validators.required],
      supportStartDate: ['', Validators.required],
      supportEndDate: ['', Validators.required],
      description: [''],
    });
  }
  createForm() {
    this.submitted = true;
    if (this.invoiceForm) {
      this.toastr.showSuccess("Submitted Successfully !!", "")
      console.table(this.invoiceForm.value);
    }
    else {
      this.toastr.showError("Please enter the details", "")
    }
  }
  navigateToParent() {
    this.router.navigate(['/dmt/invoice'])
  }
  get invoiceFormControl(){
    return this.invoiceForm.controls;
  }
}


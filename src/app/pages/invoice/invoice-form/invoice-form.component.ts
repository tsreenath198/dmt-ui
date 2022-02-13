import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private router:Router) { }
  public invoiceForm:FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.invoiceForm = this.fb.group({
      
      no: [''],
      traineeId: [''],
      actualAmount: [''],
      receivedAmount: [''],
      receivedDate: [''],
      supportStartDate: [''],
      supportEndDate: [''],
      description: [''],
    });
  }
createForm(){
  console.log(this.invoiceForm.value)
}
  navigateToParent(){
    this.router.navigate(['/dmt/invoice'])
  }
}


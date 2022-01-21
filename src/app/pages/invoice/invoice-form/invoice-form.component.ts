import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
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
}


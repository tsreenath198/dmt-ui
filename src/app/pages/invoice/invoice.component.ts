import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceModel } from 'app/models/invoice-model';
import { InvoiceService } from 'app/services/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

public invoiceDataSource:InvoiceModel[];

  constructor(private router:Router,
    private invoiceService:InvoiceService) { }

  ngOnInit(): void {
    this.getInvoiceData();
  }
  getInvoiceData() {
    this.invoiceService.getMockData().subscribe((result:InvoiceModel[]) =>{
      this.invoiceDataSource = result;
    })
  }
  onAddClick() {
    console.log("Add")
  }
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate(['/invoice/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/invoice/update',1])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { InvoiceModel } from 'app/models/invoice-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { InvoiceService } from 'app/services/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

public invoiceDataSource:InvoiceModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private invoiceService:InvoiceService, private confirmationDialogService:ConfirmationDialogService) { }

  ngOnInit(): void {
    this.getInvoiceData();
  }
  getInvoiceData() {
    this.invoiceService.getMockData().subscribe((result:InvoiceModel[]) =>{
      this.invoiceDataSource = result;
    })
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate([this.routeConstants.INVOICE_CREATE])
  }
  navigateToUpdateForm(){
    this.router.navigate([this.routeConstants.INVOICE_UPDATE,1])
  }
  public onDeleteClick(id: number): void {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.invoiceDataSource = this.invoiceDataSource.filter(technology => technology.id !== id);;
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

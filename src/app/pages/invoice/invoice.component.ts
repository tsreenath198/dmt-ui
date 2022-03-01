import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'app/constants/route-contants';
import { InvoiceModel } from 'app/models/invoice-model';
import { ConfirmationDialogService } from 'app/services/confirmation-dialog/confirmation-dialog.service';
import { InvoiceService } from 'app/services/invoice/invoice.service';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

public invoiceDataSource:InvoiceModel[];
public routeConstants = new RouteConstants();

  constructor(private router:Router,
    private invoiceService:InvoiceService, private confirmationDialogService:ConfirmationDialogService, private toastr:NotificationService) { }

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
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to Delete Id : ' + id)
      .then((confirmed) => {
        if (confirmed) {
          this.invoiceDataSource = this.invoiceDataSource.filter(invoice => invoice.id !== id);
          this.toastr.showSuccess("Deleted successfully !!", "Inovice")
        }
      }
      ).catch(() => console.log('User dismissed the dialog '))
  }
}

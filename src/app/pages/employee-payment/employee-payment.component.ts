import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-payment',
  templateUrl: './employee-payment.component.html',
  styleUrls: ['./employee-payment.component.css']
})
export class EmployeePaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['/employeepayment/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/employeepayment/update',1])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

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
    this.router.navigate(['/salary/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/salary/update',1])
  }
}


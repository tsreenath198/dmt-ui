import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quetion',
  templateUrl: './quetion.component.html',
  styleUrls: ['./quetion.component.css']
})
export class QuetionComponent implements OnInit {

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
    this.router.navigate(['/quetion/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/quetion/update',1])
  }
}

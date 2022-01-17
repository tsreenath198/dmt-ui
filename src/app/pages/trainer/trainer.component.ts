import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

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
    this.router.navigate(['/trainer/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/trainer/update',1])
  }
}

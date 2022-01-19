import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-interaction',
  templateUrl: './support-interaction.component.html',
  styleUrls: ['./support-interaction.component.css']
})
export class SupportInteractionComponent implements OnInit {

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
    this.router.navigate(['/supportinteraction/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/supportinteraction/update',1])
  }
}

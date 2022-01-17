import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quetion',
  templateUrl: './quetion.component.html',
  styleUrls: ['./quetion.component.css']
})
export class QuetionComponent implements OnInit {

  constructor() { }

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
}

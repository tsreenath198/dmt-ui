import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate(['/pipeline/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/pipeline/update',1])
  }
}

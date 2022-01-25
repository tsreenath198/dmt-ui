import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { supportInteractionModel } from 'app/models/supportInteraction-model';
import { SupportinteractionService } from 'app/services/supportinteraction/supportinteraction.service';

@Component({
  selector: 'app-support-interaction',
  templateUrl: './support-interaction.component.html',
  styleUrls: ['./support-interaction.component.css']
})
export class SupportInteractionComponent implements OnInit {

  public supportinteractionDataSource: supportInteractionModel[];

  constructor(private router: Router,
    private supportinteractionService: SupportinteractionService) { }
  ngOnInit(): void {
    this.getSupportinteractionData();
  }
  getSupportinteractionData() {
    this.supportinteractionService.getMockData().subscribe((result: supportInteractionModel[]) => {
      this.supportinteractionDataSource = result;
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
  navigateToCreateForm() {
    this.router.navigate(['/supportinteraction/create'])
  }
  navigateToUpdateForm() {
    this.router.navigate(['/supportinteraction/update', 1])
  }
}

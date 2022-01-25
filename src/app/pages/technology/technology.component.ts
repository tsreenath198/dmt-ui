import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnologyModel } from 'app/models/technology-model';
import { TechnologyService } from 'app/services/technology/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technologyDataSource: TechnologyModel[];

  constructor(private router: Router,
    private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.getTechnologyData();
  }

  getTechnologyData() {
    this.technologyService.getMockData().subscribe((result: TechnologyModel[]) => {
      this.technologyDataSource = result;
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
    this.router.navigate(['/technology/technology/create'])
  }
  navigateToUpdateForm() {
    this.router.navigate(['/technology/technology/update', 1])
  }
}

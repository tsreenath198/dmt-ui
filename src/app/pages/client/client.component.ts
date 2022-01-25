import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'app/models/client-model';
import { ClientService } from 'app/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clientDataSource:ClientModel[];

  constructor(private router:Router,
    private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClientData()
  }
  getClientData() {
    this.clientService.getMockData().subscribe((result:ClientModel[]) =>{
      this.clientDataSource = result;
    })
  }

  onDeleteClick() {
    console.log("delete")
  }
  onUpdateClick() {
    console.log("update")
  }
  navigateToCreateForm(){
    this.router.navigate(['/client/create'])
  }
  navigateToUpdateForm(){
    this.router.navigate(['/client/update',1])
  }
}

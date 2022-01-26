import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpClient:HttpClient) { }

  getMockData(){
    return this.httpClient.get("assets/mock-data/salary-mock.json")
  }
}

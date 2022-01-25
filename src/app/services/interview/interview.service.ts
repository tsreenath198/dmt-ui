import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private httpClient:HttpClient) { }

  getMockData(){
    return this.httpClient.get('assets/mock-data/interview-mock.json')
  }
}

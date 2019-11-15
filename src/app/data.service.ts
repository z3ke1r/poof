import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  REST_API_SERVER = "http://35.184.188.160:8000/farts/1/";

  constructor(private httpClient: HttpClient) { }
  
  public getFarts(){
    console.log(this.httpClient.get(this.REST_API_SERVER));
    return this.httpClient.get(this.REST_API_SERVER); }
}

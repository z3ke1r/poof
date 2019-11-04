import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://34.67.193.57:4200/farts";

  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
}

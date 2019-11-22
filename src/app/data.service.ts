import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  REST_API_SERVER = "http://34.66.210.130:8000/";
  FART_ENDPOINT = REST_API_SERVER + "farts/";
  USER_ENDPOINT = REST_API_SERVER + "users/";
  

  constructor(private httpClient: HttpClient) { }
  
  public getFarts(){
    console.log(this.httpClient.get(this.FART_ENDPOINT));
    return this.httpClient.get(this.FART_ENDPOINT); }
  
  public getUsers(){
    console.log(this.httpClient.get(this.USER_ENDPOINT));
    return this.httpClient.get(this.USER_ENDPOINT); }
  
}

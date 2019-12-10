import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  FART_ENDPOINT = "http://34.67.17.222:8000/farts/2/";
  USER_ENDPOINT = "http://34.67.17.222:8000/users/";


  constructor(private httpClient: HttpClient) { }

  public getFarts(){
    console.log(this.httpClient.get(this.FART_ENDPOINT));
    return this.httpClient.get(this.FART_ENDPOINT); }

}

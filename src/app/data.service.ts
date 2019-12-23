import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  FART_ENDPOINT = 'http://34.69.4.121:8000/farts/';
  USER_ENDPOINT = 'http://34.69.4.121:8000/users/';
  FART_QUERY = 'http://34.69.4.121:8000/farts?'

  constructor(private httpClient: HttpClient) { }

  public getFarts() {
    console.log(this.httpClient.get(this.FART_ENDPOINT));
    return this.httpClient.get(this.FART_ENDPOINT); }
  
  public getUserFarts(username) {
    console.log(this.httpClient.get(this.FART_QUERY));
    return this.httpClient.get(this.FART_QUERY); }

}

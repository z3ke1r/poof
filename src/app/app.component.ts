import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {HttpClient} from "@angular/common/http";

interface Fart {
    type: string;
    smell_scale:number;
    noise_scale:number;
    score:number;
    date_farted:Date; 
    city:string;
    user:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'poof';

  farts;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFarts().subscribe((data)=>{
      console.log(data);
      this.farts = data['farts'];
    })  
  }
}

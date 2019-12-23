import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  farts: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFarts().subscribe(data => {
      console.log(data);
      this.farts = data;
    });
  }

}

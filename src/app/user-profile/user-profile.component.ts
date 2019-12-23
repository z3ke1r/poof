import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  farts: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUserFarts('username=admin').subscribe(data => {
      console.log(data);
      this.farts = data;
    });
  }

}

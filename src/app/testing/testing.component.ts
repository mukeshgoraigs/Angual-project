import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
user: any ;
  constructor() { }

  ngOnInit() {
  }
  list() {
    this.user = [
      {uname: 'mukesh', password: 'mukesh12@', cpassword: 'mukesh@12'},
      {uname: 'mk', password: 'mukesh', cpassword: 'mukesh'},
      {uname: 'muku', password: 'mukes', cpassword: 'mukes'},
      ];
}
}

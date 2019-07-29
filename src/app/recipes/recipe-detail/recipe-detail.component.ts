import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 user: any ;
  constructor() { }

  ngOnInit() {
    this.list();
  }
  list() {
    this.user = [
      {fname: 'amit', lname: 'kumar', email: 'amit@gmail.com'},
      {fname: 'vikas', lname: 'kumar', email: 'amit@gmail.com'},
      {fname: 'a', lname: 'm', email: 'a@gmail.com'},
      {fname: 'b', lname: 'n', email: 'n@gmail.com'},
    ];
  }
}

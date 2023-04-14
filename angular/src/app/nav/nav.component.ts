import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  menus = new Array<{ url: string; name: string}>();
  title : string;

  constructor(){}

  ngOnInit(): void {
    this.title = 'Teaching Management System'; 
    this.menus.push({url: 'teacher', name: 'Teacher Management'}); 
    this.menus.push({url: 'klass', name: 'Class Management'}); 
  }

}

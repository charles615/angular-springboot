import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  
  teachers : Teacher[] = [];

  constructor(private httpClient: HttpClient) {
  }

  
  ngOnInit() {
    
    const url = 'http://localhost:8080/hello';
    const self = this;

    
    const success = function(response: any) {
      self.teachers = response;
    };

    
    const error = function(response: any) {
      console.log(response);
      console.error('请求出错');
    };

    
    this.httpClient.get(url)
      .subscribe(success, error);
  }
 }


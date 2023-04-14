import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit{

  name ?: string;
  email ?: string ;


  constructor(private httpClient: HttpClient, 
              private router : Router,
              ){}

  ngOnInit(): void {}

  OnSubmit() {
    const url = 'http://localhost:8080/teacher';
    console.log('Clicked submit button.');

    const teacher   = {
      name : this.name,
      email : this.email,
    }
    console.log(teacher);


    this.httpClient.post(url, teacher).subscribe(() =>{
      console.log('Success.');
      this.router.navigate(['./teacher']);
      }, (response) => {
        console.error('Failed', response);
      });

  }



}

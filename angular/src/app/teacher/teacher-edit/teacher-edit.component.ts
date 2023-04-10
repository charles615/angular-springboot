import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit{

  teacher : any = {};
  
  

  constructor(private route: ActivatedRoute, 
              private httpClient: HttpClient, 
              private router: Router,
              ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    const url = 'http://localhost:8080/teacher/' + id;
    
    this.httpClient.get(url)
      .subscribe((data) => {
        this.teacher = data;
        console.log(this.teacher);
      }, () => {
        console.log(`请求 ${url} 发生错误`)
      });
  }

  OnChange() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = 'http://localhost:8080/teacher/' + id;
    console.log('Clicked submit button.');
    
    this.httpClient.put(url, this.teacher).subscribe(() =>{
      console.log('Success.');
      console.log(this.teacher);

      this.router.navigate(['/']);
      
      }, () => {
        console.error('Failed');
      });

  }

}

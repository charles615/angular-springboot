import { Component, OnInit } from '@angular/core';
import { Teacher } from '../norm/entity/teacher';
import { Klass } from '../norm/entity/klass';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  private message = '';
  private url = 'http://localhost:8080/klass';

  params = {
    name: ''
  }

  // klasses = [
  //   new Klass(1, 'class1', new Teacher(1, 'charles', '123')),
  //   new Klass(2, 'class2', new Teacher(2, 'charles2', '123')),
  // ]

  klasses : any;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.onQuery();
  }


  onQuery() {
    console.log('执行onQuery');
    this.httpClient.get(this.url, {params: this.params})
      .subscribe(data => {
        console.log('成功执行请求', data);
        this.klasses = data;
      }, () => {
        console.log(`请求${this.url}错误`);
      });
  }

}

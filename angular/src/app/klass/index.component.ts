import { Component, OnInit } from '@angular/core';
import { Klass } from '../norm/entity/klass';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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

  show : boolean = false;

  // klasses = [
  //   new Klass(1, 'class1', new Teacher(1, 'charles', '123')),
  //   new Klass(2, 'class2', new Teacher(2, 'charles2', '123')),
  // ]

  klasses : any;
  showKlass : Klass;
  

  constructor(private route: ActivatedRoute, 
              private httpClient: HttpClient, 
              private router: Router,){}

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

  onChange(klass : Klass) {
    this.show = !this.show;
    this.showKlass = klass;
  }

  onUpdate() {
    
    console.log(this.showKlass);
    
    this.httpClient.put(this.url, this.showKlass).subscribe(() =>{
      console.log('Success.');
      

      this.ngOnInit();
      this.show = !this.show;
      
      }, () => {
        console.error('Failed');
      });

  }

}

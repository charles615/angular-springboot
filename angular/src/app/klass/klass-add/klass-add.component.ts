import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Klass } from 'src/app/norm/entity/klass';
import { Teacher } from 'src/app/norm/entity/teacher';

@Component({
  selector: 'app-klass-add',
  templateUrl: './klass-add.component.html',
  styleUrls: ['./klass-add.component.css']
})
export class KlassAddComponent implements OnInit{
  
  public static errorMessage = '数据保存失败，这可能是由于网络的原因引起的';
  name : string;
  tid : number;

  message : string;
  
  ngOnInit(): void {}

  constructor(private httpClient: HttpClient,
              private router: Router,
              private route: ActivatedRoute){}

  onSubmit() {
    const url = 'http://localhost:8080/klass';
    // const klass = new Klass(undefined, this.name?.value,
    //   new Teacher(parseInt(this.teacherId?.value, 10), undefined, undefined)
    // );

    const klass = {
      name: this.name,
      teacher : new Teacher(this.tid, undefined, undefined)
    };
      console.log(klass);
      
  //   this.httpClient.post(url, klass)
  //     .subscribe(() => {
  //       console.log('保存成功');
  //       console.log(klass);
  //       this.router.navigate([''], {relativeTo: this.route});
  //     }, (response) => {
  //       console.log(`向${url}发起的post请求发生错误` + response);
  //       this.setMessage(KlassAddComponent.errorMessage);
  //     });
  // }

  // private setMessage(message: string): void {
  //   this.message = message;
  //   setTimeout(() => {
  //     this.message = '';
  //   }, 1500);
  // }


  
  this.httpClient.post(url, klass).subscribe(() =>{
    console.log('Success.');
    
    this.router.navigate(['/klass']);
    }, (response) => {
      console.error('Failed', response);
    });
  }

}

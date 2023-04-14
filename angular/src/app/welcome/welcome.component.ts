import { Component } from '@angular/core';
import { Tool } from '../norm/entity/tool';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

tool : Tool;

tools :Tool[] = [
  new Tool('Java', '11'),
  new Tool('Angular', '#'),
  new Tool('Springboot', '2.7.10'),
  new Tool('MySql', '8.1'),
  new Tool('MyBatis', '#'),
]

}

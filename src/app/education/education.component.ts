import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  route: any;

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
		this.route.navigate(['/education']);
	}


}

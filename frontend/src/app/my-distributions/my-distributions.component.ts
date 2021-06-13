import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-distributions',
  templateUrl: './my-distributions.component.html',
  styleUrls: ['./my-distributions.component.css']
})
export class MyDistributionsComponent implements OnInit {

  myimage:string = "assets/images/3.webp";

  constructor() { }

  ngOnInit(): void {
  }

}

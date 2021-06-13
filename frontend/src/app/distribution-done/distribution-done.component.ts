import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribution-done',
  templateUrl: './distribution-done.component.html',
  styleUrls: ['./distribution-done.component.css']
})
export class DistributionDoneComponent implements OnInit {

  myimage1:string = "assets/images/2.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

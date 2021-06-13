import { Component, OnInit } from '@angular/core';
import { VaccinesService } from 'src/app/vaccines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vaccines',
  templateUrl: './admin-vaccines.component.html',
  styleUrls: ['./admin-vaccines.component.css']
})
export class AdminVaccinesComponent implements OnInit {



  constructor(){}

  ngOnInit(): void {
  }
}



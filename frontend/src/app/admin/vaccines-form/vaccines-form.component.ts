import { Component, OnInit } from '@angular/core';
import { VaccinesService } from 'src/app/vaccines.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vaccines-form',
  templateUrl: './vaccines-form.component.html',
  styleUrls: ['./vaccines-form.component.css']
})
export class VaccinesFormComponent implements OnInit {


  constructor(
    private router: Router,

    private _VaccinesService: VaccinesService) { }

  ngOnInit() {

    this._VaccinesService.getvaccines();
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccines } from './vaccines';
import { Observable } from 'rxjs';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

    uri = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getvaccines(){
    return this.http.get('${this.uri}/vaccines');
  };
  }


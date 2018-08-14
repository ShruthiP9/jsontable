import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import{Tables} from './tables';


@Injectable()
export class ServService {
tabledata:Tables[];
  constructor(private http:Http ){

   }
   
   getPosts():Observable <Tables[]>{
     return this.http.get('assets/imputs.json').map((response:Response)=>response.json());
   }

}

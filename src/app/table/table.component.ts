import { Component, OnInit } from '@angular/core';
import {ServService} from '../serv.service';
import {Tables} from '../tables';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabledata:Tables[];
  constructor(private sservice:ServService){
    
  }
  
  ngOnInit(){
    this.sservice.getPosts().subscribe(responseposts=>{this.tabledata=responseposts});
  }
}
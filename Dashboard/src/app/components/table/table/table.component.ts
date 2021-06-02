import { AfterViewInit, Component, OnInit, Input ,ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data:any;
  @Input() columns:any;
  @Input() newlabels:any;
  @Input() pagesizes:any;
  datasource:any;
  displayedColumns:String[];

  
  constructor() { }


  ngOnInit(){
  if (!this.pagesizes){this.pagesizes=[10, 50,100]};
  this.displayedColumns =  this.columns;
  this.datasource = new MatTableDataSource(this.data); 
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;    
  }

  ngOnChanges(changes: any) {
    this.displayedColumns =  this.columns;
    this.datasource = new MatTableDataSource(this.data); 
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;   

  }


}

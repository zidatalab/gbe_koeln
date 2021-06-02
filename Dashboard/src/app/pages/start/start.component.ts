import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  


  constructor(private api: ApiService) { }

  metadata :any;
  sortdata: any;
  level : any;
  levelvalues:any;
  subgroups:any;
  outcomes:any;

  ngOnInit(): void {

    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.level = this.api.filterArray(this.metadata,"type","level")[0]["varname"];
    this.levelvalues = this.api.filterArray(this.sortdata,"varname",this.level)[0]["values"];
    this.subgroups = this.api.getValues(this.api.filterArray(this.metadata,"type","group"),"varname");
    this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata,"topic","outcomes"),"varname"),"varname");
    console.log(this.metadata,this.sortdata,this.level,this.levelvalues,this.subgroups,this.outcomes);


  }



}

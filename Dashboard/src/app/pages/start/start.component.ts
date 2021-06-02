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
  levelsettings={};
  
  ngOnInit(): void {

    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.level = this.api.filterArray(this.metadata,"type","level")[0]["varname"];
    this.levelvalues = this.api.filterArray(this.sortdata,"varname",this.level)[0]["values"];
    if (this.levelvalues.length>0){this.setlevel("levelvalues", this.levelvalues[0])}
    this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata,"type","group"),"varname"));
    if (this.subgroups.length>0){this.setlevel("subgroups", this.subgroups[0])}
    this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata,"topic","outcomes"),"varname"),"varname");
    if (this.outcomes.length>0){this.setlevel("outcomes", this.outcomes[0])}
    this.querydata();

  }

  setlevel(level,value){
    this.levelsettings[level]=value;    
  }

  querydata(){
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {},
      "showfields": [this.levelsettings["outcomes"]]};
    query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
    console.log(query);
    for (let group in this.subgroups){
      if (this.levelsettings["subgroups"]!=group){
        query["groupinfo"][group]  = this.api.filterArray(this.sortdata,"varname",group)[0]["allforlevel"];
      }
      else {
        delete query["groupinfo"][group];
      };
    }
    console.log(query);
    //return this.api.postTypeRequest('get_data/',query);
  }


}

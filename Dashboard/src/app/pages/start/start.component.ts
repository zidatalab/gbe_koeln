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
  data : any;
  datakeys:any;

  ngOnInit(): void {    
    this.metadata = this.api.getmetadata("metadata");
    if (this.metadata.length>0){
    this.sortdata = this.api.getmetadata("sortdata");
    this.level = this.api.filterArray(this.metadata,"type","level")[0]["varname"];
    this.levelvalues = this.api.filterArray(this.sortdata,"varname",this.level)[0]["values"];
    if (this.levelvalues.length>0){this.levelsettings["levelvalues"]= this.levelvalues[0];}
    this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata,"type","group"),"varname"));
    if (this.subgroups.length>0){this.levelsettings["subgroups"]=this.subgroups[0];}
    this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata,"topic","outcomes"),"varname"),"varname");
    if (this.outcomes.length>0){this.levelsettings["outcomes"]=this.outcomes[0];}
    this.querydata();
    }
  }

  setlevel(level,value){
    this.levelsettings[level]=value;        
    this.querydata();
  }

  querydata(){
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {},
      "showfields": [this.levelsettings["outcomes"]]};
    let outcomeinfo = this.api.filterArray(this.metadata,"varname",this.levelsettings["outcomes"][0])["type"];
    query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
    let i =0
    for (let group of this.subgroups){
      if (i>0){
        if (this.levelsettings["subgroups"]!=group && this.levelsettings["subgroups"]!=this.subgroups[0]){
          query["groupinfo"][group] = this.api.filterArray(this.metadata,"varname",group)[0]["allforlevel"];
        }        
      }
      i++;
    }
    this.api.postTypeRequest('get_data/',query).subscribe(data=>{
    this.datakeys=Object.keys(data["data"][0]);
    const index = this.datakeys.indexOf(this.level);
    if (index > -1) {
      this.datakeys.splice(index, 1);
    }
    this.data = this.fixRates(data["data"],this.levelsettings["outcomes"],outcomeinfo);
  });
    
    
  }

  fixRates(array:any,rate:string,type:string){
    if (type="rate"){
    for (let el of array){
      let topush = el;
      topush[rate]=Math.round(topush[rate]*1000)/10;
     
    }
    }    
    return array;
    
  }


}

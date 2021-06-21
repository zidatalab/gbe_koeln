import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  
  constructor(private api:ApiService, private auth:AuthService) { }

  actions =  ['Regionen beschreiben','Analysen']
  intend ="";
  metadata:any;
  sortdata:any;
  geojson_available:any;
  levelid:string;
  level:string;
  levelvalues:any;
  currentlevel:string;
  currentregion:string;
  mapdata:any;
  regiondata:any;
  overalldata:any;
  andata:any;
  outcomes:any;
  outcome:string;
  determinants:any;
  determinant:string;
  controls:any;
  regressiondata:any;

  ngOnInit(): void {
    this.controls=[];
    this.intend = this.actions[0];
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = this.api.getmetadata("geodata");
    setInterval(()=>{this.auth.getRefreshToken()},60*1000*5)
    this.updatesortinfo();
    if (!this.levelid){
      setTimeout(()=>{this.updatesortinfo();},750);
    }
    setTimeout(()=>{this.getregionandata();},750);
  }

  ngOnDestroy(){
    this.regiondata={};
    this.regressiondata=[];
    this.mapdata=[];
    this.overalldata={};
    }


  updatesortinfo(){
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
    this.outcomes=this.api.filterArray(this.metadata,"topic","outcomes");
    this.determinants=this.api.filterArray(this.metadata,"topic","demography");
    this.levelvalues = this.api.filterArray(this.sortdata, "varname", this.level)[0]["values"].filter(x => this.geojson_available.includes(x));;
    this.currentlevel=this.levelvalues[this.levelvalues.length-1];
    this.newlevel(this.currentlevel);
    this.currentregion="";
  }
  newlevel(level){  
    this.currentlevel=level;
    this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.currentlevel).subscribe(
      data => {
        this.mapdata = data;
      });
  }

  changeregion(event){
    this.currentregion=event;
    this.getregiondata();
  }

  getregiondata(){
    // Region
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {}
    };
    // Overall
    let refquery = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {}
    };
    for (let item of this.metadata){
      if (['ordering','subgroups'].indexOf(item.topic)>=0){
        refquery["groupinfo"][item.varname]=item.allforlevel;
      }       
    }
    query["groupinfo"][this.level] = this.currentlevel;
    query["groupinfo"][this.levelid] = this.currentregion;
    
    this.api.postTypeRequest('get_data/', query).subscribe(data => {
      this.regiondata=data['data'][0];
      this.api.postTypeRequest('get_data/', refquery).subscribe(data => {
        this.overalldata=data['data'][0];
      },
      error => {});
    },
    error => {});
    
    
  }

  removeoutcome(item){
    this.controls = this.controls.filter(x=>x!==item);
  }

  getregionandata(){
    if (this.outcome && this.determinant){
      let query = {
        "client_id": this.api.REST_API_SERVER_CLIENTID,
        "groupinfo": {}
      };
      query["groupinfo"][this.level] = this.currentlevel;
      query["showfields"]=[this.outcome,this.determinant];
      this.api.postTypeRequest('get_data/', query).subscribe(data => 
        {let res = data;this.andata=res['data'];});
        this.getregresults(); 
     }
  }
  getregresults(){
    let anquery ={
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {},
       "theoutcome": this.outcome,
       "maininterest": this.determinant,
       "controls": this.controls
     };
     anquery["groupinfo"][this.level] = this.currentlevel;
     this.api.postTypeRequest('analytics/regression/', anquery).subscribe(data => 
       {let res = data;this.regressiondata=res;
        //console.log(this.regressiondata);
      }); 
   
  }
}
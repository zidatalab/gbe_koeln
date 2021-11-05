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

  actions =  ['Regionen beschreiben','Zusammenhangsanalysen']
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
  mapdata_properties:any;
  regiondata:any;
  overalldata:any;
  andata:any;
  outcomes:any;
  outcome:string;
  outcome_meta:any;
  determinants:any;
  determinant:string;
  determinant_meta:any;
  controls:any;
  regressiondata:any;

  ngOnInit(): void {
    this.controls=[];
    this.intend = this.actions[0];
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = ["Stadtbezirke","Stadtteile","Statistische Quartiere","Sozialräume"];    
    this.updatesortinfo();
    if (!this.levelid){
      setTimeout(()=>{this.updatesortinfo();},750);
    }
    setTimeout(()=>{this.getregionandata();},750);
  }

  ngOnDestroy(){
    this.regiondata=null;
    this.andata=null;
    this.regressiondata=null;
    this.mapdata=null;
    this.overalldata=null;
    }


  updatesortinfo(){
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
    this.outcomes=this.api.filterArray(this.metadata,"topic","outcomes");
    this.determinants=this.api.filterArray(this.metadata,"topic","demography");
    this.levelvalues = this.geojson_available; 
    this.currentlevel=this.levelvalues[0];
    this.newlevel(this.currentlevel);
    this.currentregion="";
  }
  newlevel(level){  
    this.currentlevel=level;    
    this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.currentlevel).subscribe(
      data => {
        this.mapdata = data;
        this.mapdata_properties=this.api.getValues(this.mapdata['features'],'properties');
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
      "groupinfo": {"level":"Gesamt"}
    };
/*     for (let item of this.metadata){
      if (['ordering','subgroups'].indexOf(item.topic)>=0){
        refquery["groupinfo"][item.varname]=item.allforlevel;
      }       
    } */
    query["groupinfo"][this.level] = this.currentlevel;
    query["groupinfo"][this.levelid] = this.currentregion;
    query["groupinfo"]['sg.Geschlecht'] = "Gesamt";
    query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
    refquery["groupinfo"]['sg.Geschlecht'] = "Gesamt";
    refquery["groupinfo"]['sg.Altersgruppe_ID'] = "0";
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
      this.determinant_meta = this.api.filterArray(this.metadata,'varname',this.determinant)[0];
      this.outcome_meta = this.api.filterArray(this.metadata,'varname',this.outcome)[0];


      let query = {
        "client_id": this.api.REST_API_SERVER_CLIENTID,
        "groupinfo": {}
      };
      query["groupinfo"][this.level] = this.currentlevel;
      query["groupinfo"]['sg.Geschlecht'] = "Gesamt";
      query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
      query["showfields"]=[this.outcome,this.determinant];
      this.andata=null;
      this.api.postTypeRequest('get_data/', query).subscribe(data => 
        {let res = data;this.andata=res['data'];});       
     }
  }
  getregresults(){
    if (this.outcome && this.determinant){
    let anquery ={
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {"sg.Geschlecht": "Gesamt","sg.Altersgruppe_ID": "0"},
       "theoutcome": this.outcome,
       "maininterest": this.determinant,
       "controls": this.controls
     };
     anquery["groupinfo"]['level'] = this.currentlevel;
     anquery["groupinfo"]['sg.Geschlecht'] = "Gesamt";
     anquery["groupinfo"]['sg.Altersgruppe_ID'] = "0";
     this.regressiondata=null;
     this.api.postTypeRequest('analytics/regression/', anquery).subscribe(data => 
       {let res = data;this.regressiondata=res;
        
      }); 
    };
  }
}
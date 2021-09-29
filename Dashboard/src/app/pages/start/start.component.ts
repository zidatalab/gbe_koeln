import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {



  constructor(private api: ApiService, private auth: AuthService) { }
  metadata=[];
  progress:boolean;
  metadataok: boolean;
  mapdata_stadtbezirke:any;
  mapdata_stadtteile:any;
  mapdata_sozialraum:any;
  mapdata_statistischequartiere:any;
  sortdata=[];
  level: any;
  levelvalues: any;
  subgroups: any;
  outcomes: any;
  outcomeinfo: any;
  outcomes_m1q: any;
  outcomes_m2q: any;
  outcomes_util: any;
  outcomeart :string = "M2Q";
  determinants: any;
  levelsettings = {'subgroupresolution':'Gesamt','subgroup_agegrpid':0,'subgroup_gender':'Gesamt','subgroup_agegrpid_agevalue':'Gesamt'};
  data: any;
  data_overall: any;
  data_age_sex: any;
  datakeys: any;
  currentuser: any;
  data_rate: any;
  data_number: any;
  geojson_available: any;
  colorsscheme: any;
  levelid:string;
  datakeystable:any;
  altergruppenid_ageoptions = [];
  altergruppenid_options = [
    {"sg.Altersgruppe_ID":"0","label":"Gesamt",
      "data":[{"sg.Altersgruppe":"Gesamt"},{"sg.Altersgruppe":"Gesamt altersstandardisiert"}]},
    {"sg.Altersgruppe_ID":"1","label":"Lebensphasen",
    "data":[{"sg.Altersgruppe":"Gesamt"},{"sg.Altersgruppe":"0 bis 17 Jahre"},{"sg.Altersgruppe":"18 bis 34 Jahre"},{"sg.Altersgruppe":"35 bis 64 Jahre"},
            {"sg.Altersgruppe":"65 und mehr Jahre"}]},
    {"sg.Altersgruppe_ID":"2","label":"Differenzierte Lebensphasen",
        "data":[{"sg.Altersgruppe":"Gesamt"},{"sg.Altersgruppe":"0 bis 13 Jahre"},{"sg.Altersgruppe":"14 bis 17 Jahre"},
        {"sg.Altersgruppe":"18 bis 34 Jahre"},{"sg.Altersgruppe":"35 bis 64 Jahre"},{"sg.Altersgruppe":"65 bis 79 Jahre"},
        {"sg.Altersgruppe":"80 und mehr Jahre"}]},
    {"sg.Altersgruppe_ID":"3","label":"Kinder und Jugendliche",
      "data":[{"sg.Altersgruppe":"Gesamt"},{"sg.Altersgruppe":"0 bis 5 Jahre"},{"sg.Altersgruppe":"6 bis 10 Jahre"},
      {"sg.Altersgruppe":"11 bis 14 Jahre"}]},
    {"sg.Altersgruppe_ID":"4","label":"5-Jahres-Altersgruppen",
    "data":[{"sg.Altersgruppe":"Gesamt"},{"sg.Altersgruppe":"0 bis 9 Jahre"},
      {"sg.Altersgruppe":"10 bis 19 Jahre"},{"sg.Altersgruppe":"20 bis 29 Jahre"},{"sg.Altersgruppe":"30 bis 39 Jahre"},
      {"sg.Altersgruppe":"40 bis 49 Jahre"},{"sg.Altersgruppe":"50 bis 59 Jahre"},{"sg.Altersgruppe":"60 bis 69 Jahre"},
      {"sg.Altersgruppe":"70 bis 79 Jahre"},{"sg.Altersgruppe":"80 und mehr Jahre"}]}];
  

  ngOnInit(): void {
    this.progress=true;
    this.colorsscheme = ["#e91e63"];
    this.data=[];    
    this.updatemetadata();
    this.auth.currentUser.subscribe(data => { this.currentuser = data; });
    if (this.metadataok) { this.querydata();}
    // Wait if no metadata and try again. Fixes logout behaviour
    else {
      setTimeout(() => {
        this.updatemetadata();
        if (this.metadataok) {
          this.querydata()
        }
        else {
          this.progress=false;
        };
      }, 2500);
    }
    this.querygeodata();
  }

  ngOnDestroy(){
    this.data=[];   
    }


  setlevel(level, value) {
    this.levelsettings[level] = value;
    if (level=="subgroup_agegrpid"){
      this.altergruppenid_ageoptions = this.api.filterArray(this.altergruppenid_options,'sg.Altersgruppe_ID',value)[0]['data'];
      console.log(this.altergruppenid_ageoptions);
      this.levelsettings['subgroup_agegrpid_agevalue']="Gesamt";
    }
    
    this.querydata();
  }

  updatemetadata() {
    if (this.api.getmetadata("metadata")){
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = ["Stadtbezirke","Stadtteile"];
    }
    if(this.metadata){
      if (this.metadata.length>0){
        this.dometasettings();
      }      
    }
    setTimeout(() => {
      if ((!this.metadata == false) && (!this.sortdata == false)) {
        if (this.metadata.length > 0) {
          this.dometasettings();
        }
      }
      else {
        this.metadataok = false;
        this.progress=false;
      }  
      
    }, 1500);    
  }

  thereisdata() {
    let res = false
    res = this.data
    // if (res) {
    //   res = (this.data.length > 0) && (this.metadata.length > 0);
    // }
    return res
  }

  dometasettings(){
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
          this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
          this.levelvalues = ["Stadtbezirke","Stadtteile","Statistische Quartiere","Sozialräume",
          "Umweltbelastungszonen Hitze","Umweltbelastungszonen Lärm","Umweltbelastungszonen Luft"];
          if (this.levelvalues) {
            this.levelsettings["levelvalues"] ="Stadtbezirke"  ;
          }
          this.subgroups = ["Keine"].concat([]);
          if (this.subgroups) { this.levelsettings["subgroups"] = this.subgroups[0]; }
          this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "outcomes"), "varname"), "varname");
          this.outcomes_m1q = this.outcomes.filter(str => str.includes('M1Q'));
          this.outcomes_m2q = this.outcomes.filter(str => str.includes('M2Q'));
          this.outcomes_util = this.outcomes.filter(str => str.includes('Anteil'));


          this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
          if (this.outcomes) { this.levelsettings["outcomes"] = this.outcomes[0]; }
          this.metadataok = true;
          this.progress=false;          

  }
  
  querydata() {
    this.data =[];
    this.data_overall = "-";
    this.data_age_sex=[];
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {},
      "showfields": [this.levelsettings["outcomes"]]
    };
    this.outcomeinfo = this.api.filterArray(this.metadata, "varname", this.levelsettings["outcomes"])[0];
    query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
    query["groupinfo"]['sg.Geschlecht'] = this.levelsettings['subgroup_gender'];
    query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
    if (this.levelsettings['subgroup_agegrpid']!=0 && this.levelsettings['subgroup_agegrpid_agevalue']!=='Gesamt'){
      query["groupinfo"]['sg.Altersgruppe_ID'] = this.levelsettings['subgroup_agegrpid'];
      query["groupinfo"]['sg.Altersgruppe'] = this.levelsettings['subgroup_agegrpid_agevalue'];
    }

    let i = 0
    this.api.postTypeRequest('get_data/', query).subscribe(data => {
      this.datakeys = Object.keys(data["data"][0]);
      this.datakeystable = Object.keys(data["data"][0]);
      this.data = data["data"] ;
      const index = this.datakeys.indexOf(this.level);
      if (index > -1) {
        this.datakeys.splice(index, 1);
      }
      if (this.levelsettings['levelvalues']!="Gesamt"){
        this.datakeys = [this.levelid,this.levelsettings["outcomes"]];
      }
      else {
        this.datakeys = this.datakeys.filter(item => item!=this.levelid);
      }

      // Query Overall Data
      const overallquery = query;
      overallquery["groupinfo"]['level'] = "Gesamt";
      this.api.postTypeRequest('get_data/', overallquery).subscribe(data => {
        this.data_overall=data['data'][0][this.levelsettings["outcomes"]];
        if (this.outcomeinfo['type']=="rate"){
          this.data_overall = this.data_overall*100;
        };
      },error => {});

      // Query Age/Sex
      let agesexquery = query;
      agesexquery["groupinfo"]={};
      agesexquery["groupinfo"]['level'] = "Gesamt";
      agesexquery["groupinfo"]['sg.Geschlecht']={"$ne":"Gesamt"};
      agesexquery["groupinfo"]['sg.Altersgruppe_ID']="1";
      agesexquery["showfields"].push('sg.Geschlecht');
      agesexquery["showfields"].push('sg.Altersgruppe_ID');            
      this.api.postTypeRequest('get_data/', agesexquery).subscribe(data => {
        this.data_age_sex=this.extractsg(data['data']);},error => {});
      
      // Remove unneeded fields
      setTimeout(() => { 
      if (this.outcomeinfo['type'] == 'rate') {
        this.data_number = [];
        this.data_rate = [(this.levelsettings["outcomes"])];
      }
      else {
        this.data_number = [(this.levelsettings["outcomes"])];
        this.data_rate = [];
      };
    }, 0);      
            
    });

 
  }

  extractsg(array){
    let keys = Object.keys(array[0]['sg']);
    for (const item of array){
      const sg = item['sg'];            
      for (let key of keys){
        item['sg.'+key]=sg[key];            
      }
      delete item['sg'];            
    }
    return array;

  };

  querygeodata(){
    this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=Stadtbezirke').subscribe(
      data => {
        this.mapdata_stadtbezirke = data;        
      });
      this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=Stadtteile').subscribe(
        data => {
          this.mapdata_stadtteile = data;        
        });
        this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname='+'Sozialräume').subscribe(
          data => {
            this.mapdata_sozialraum = data;                
          });
      /* this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname='+'Statistische Quartiere').subscribe(
          data => {
            this.mapdata_statistischequartiere = data;        
          }); */
  }


}

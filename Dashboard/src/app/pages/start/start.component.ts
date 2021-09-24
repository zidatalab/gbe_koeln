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
  mapdata: any;
  mapdatafor: string;
  sortdata=[];
  level: any;
  levelvalues: any;
  subgroups: any;
  outcomes: any;
  determinants: any;
  levelsettings = {};
  data: any;
  datakeys: any;
  currentuser: any;
  data_rate: any;
  data_number: any;
  geojson_available: any;
  colorsscheme: any;
  levelid:string;
  datakeystable:any;
  

  ngOnInit(): void {
    this.progress=true;
    this.colorsscheme = ["#e91e63"];
    this.mapdatafor = "";
    this.data=[];
    this.mapdata=[];
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
      }, 1500);
    }    
  }

  ngOnDestroy(){
    this.data=[];
    this.mapdata=[];
    
    }


  setlevel(level, value) {
    this.levelsettings[level] = value;
    this.querydata();
  }

  updatemetadata() {
    if (this.api.getmetadata("metadata")){
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = this.api.getmetadata("geodata");
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
          this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
          if (this.outcomes) { this.levelsettings["outcomes"] = this.outcomes[0]; }
          this.metadataok = true;
          this.progress=false;          

  }
  thereismapdata() {
    let res = this.thereisdata() && this.mapdata
    return res
  }

  querydata() {
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {},
      "showfields": [this.levelsettings["outcomes"]]
    };
    let outcomeinfo = this.api.filterArray(this.metadata, "varname", this.levelsettings["outcomes"])[0]['type'];
    query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
    query["groupinfo"]['sg.Geschlecht'] = "Gesamt";
    query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
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

      
      // Remove unneeded fields
      setTimeout(() => { 
      if (outcomeinfo == 'rate') {
        this.data_number = [];
        this.data_rate = [(this.levelsettings["outcomes"])];
      }
      else {
        this.data_number = [(this.levelsettings["outcomes"])];
        this.data_rate = [];
      };
    }, 0);
      
      
      if ((this.mapdatafor !== this.levelsettings['levelvalues']) && (this.levelsettings['levelvalues'] !== 'Gesamt') && (this.geojson_available.indexOf(this.levelsettings['levelvalues']) >= 0)) {
        this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.levelsettings['levelvalues']).subscribe(
          data => {
            this.mapdata = data;
            this.mapdatafor = this.levelsettings['levelvalues'];
          },
          error => {
            this.mapdata=null;
          });
      }
    });

 
  }



}

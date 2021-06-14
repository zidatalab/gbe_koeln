import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  
  constructor(private api:ApiService) { }

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

  ngOnInit(): void {
    this.intend = this.actions[0];
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = this.api.getmetadata("geodata");
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid=this.api.filterArray(this.metadata,"type","levelid")[0]['varname'];
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
    let query = {
      "client_id": this.api.REST_API_SERVER_CLIENTID,
      "groupinfo": {}
    };
    query["groupinfo"][this.level] = this.currentlevel;
    query["groupinfo"][this.levelid] = this.currentregion;
    this.api.postTypeRequest('get_data/', query).subscribe(data => {
      this.regiondata=data['data'][0];
    },
    error => {});
  }
}
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
  metadata: any;
  metadataok: boolean;
  mapdata: any;
  mapdatafor: string;
  sortdata: any;
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

  

  ngOnInit(): void {
    this.colorsscheme = ["#e91e63"];
    this.mapdatafor = "";
    this.auth.currentUser.subscribe(data => { this.currentuser = data; });
    if (this.metadataok) { this.querydata() }
    // Wait if no metadata and try again. Fixes logout behaviour
    else {
      this.updatemetadata();
      setTimeout(() => {
        if (this.metadataok) {
          this.querydata()
        };
      }, 150);
    }

  }

  setlevel(level, value) {
    this.levelsettings[level] = value;
    this.querydata();
  }

  updatemetadata() {
    this.metadata = this.api.getmetadata("metadata");
    this.sortdata = this.api.getmetadata("sortdata");
    this.geojson_available = this.api.getmetadata("geodata");

    setTimeout(() => {
      if ((!this.metadata == false) && (!this.sortdata == false)) {
        if (this.metadata.length > 0) {
          this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
          this.levelvalues = this.api.filterArray(this.sortdata, "varname", this.level)[0]["values"];
          if (this.levelvalues) {
            this.levelsettings["levelvalues"] = 'Bezirke' //this.levelvalues[0]
              ;
          }
          this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
          if (this.subgroups) { this.levelsettings["subgroups"] = this.subgroups[0]; }
          this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "outcomes"), "varname"), "varname");
          this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
          if (this.outcomes) { this.levelsettings["outcomes"] = this.outcomes[0]; }
          this.metadataok = true;
        }

      }
      else {
        this.metadataok = false;
      }
    }, 1);

  }

  thereisdata() {
    let res = false
    res = this.data
    // if (res) {
    //   res = (this.data.length > 0) && (this.metadata.length > 0);
    // }
    return res
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
    let i = 0
    for (let group of this.subgroups) {
      if (i > 0) {
        if (this.levelsettings["subgroups"] != group && this.levelsettings["subgroups"] != this.subgroups[0]) {
          query["groupinfo"][group] = this.api.filterArray(this.metadata, "varname", group)[0]["allforlevel"];
        }
      }
      i++;
    }
    this.api.postTypeRequest('get_data/', query).subscribe(data => {
      this.datakeys = Object.keys(data["data"][0]);
      const index = this.datakeys.indexOf(this.level);
      if (index > -1) {
        this.datakeys.splice(index, 1);
      }
      setTimeout(() => { this.data = data["data"] }, 0);
      if (outcomeinfo == 'rate') {
        this.data_number = [];
        this.data_rate = [(this.levelsettings["outcomes"])];
      }
      else {
        this.data_number = [(this.levelsettings["outcomes"])];
        this.data_rate = [];
      };
      if ((this.mapdatafor !== this.levelsettings['levelvalues']) && (this.levelsettings['levelvalues'] !== this.levelvalues[0]) && (this.geojson_available.indexOf(this.levelsettings['levelvalues']) >= 0)) {
        this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.levelsettings['levelvalues']).subscribe(
          data => {
            this.mapdata = data;
            this.mapdatafor = this.levelsettings['levelvalues'];
          });
      }
    });


  }



}

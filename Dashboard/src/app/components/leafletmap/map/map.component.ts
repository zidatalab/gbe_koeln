import { Component, OnInit, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { ApiService } from 'src/app/services/api.service';
import * as chroma from "chroma-js";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {
  @Input() data = [];
  @Input() nacolor = "white";
  @Input() debug :boolean = false;
  @Input() Outcome: String;
  @Input() Zoom: number;
  @Input() basemap: any; // geojson
  @Input() center: any;
  @Input() opacity: number;
  @Input() feature: string; // name of outcome
  @Input() colorscale: any;
  @Input() cutofflist: any;
  @Input() customlabels: any;
  @Input() binmethod: string;
  @Input() selectmap: boolean;
  @Input() bins: number;
  @Input() id: string; // feature id
  @Input() percent: boolean;
  @Input() containername: string;
  @Output() clicked = new EventEmitter<string>();
  mapok:boolean;
  clickedvalue: string;
  legend: any;
  map: any;
  useprovider = 0;
  firstload = true;
  providers = ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png']
  attributions = ['Kartenmaterial &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    '©OpenStreetMap, ©CartoDB'];
  constructor(private http: HttpClient, private renderer: Renderer2, private api: ApiService) { }
  
  
  ngOnInit(): void {
    // Debug
    if (this.debug){
      console.log("ID:",this.id);
      console.log("Map:",this.api.getValues(this.basemap['features'],'properties'));  
    }

    // Sort data
    this.data = this.api.sortArray(this.data,this.Outcome);
    
    // Init vars
    this.resetprops();
    this.clickedvalue = "";
    if (!this.binmethod){
      this.binmethod='equalint';
    };
  }
  ngAfterViewInit(): void {
    // Import Map data
    this.initMap(this.containername);
  }

  

  ngOnChanges(changes: any) {
    // On any change replace the map-container
    if (!this.selectmap) {
      if ((changes.data || changes.basemap) && this.checkallok()) {
        this.resetprops();
        this.initMap(this.containername);
      };
    }
    else {
      if ((changes.basemap) && this.checkallok()) {
        this.resetprops();
        this.initMap(this.containername);
      };
    }


  }

  ngOnDestroy(){
    this.map = null;
    this.data = null;
    }


  resetprops() {
    if (!this.containername) { this.containername = "mapdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString(); };
    if (!this.Zoom) { this.Zoom = 4; };
    if (!this.center) { this.center = this.getcenter(); };//  DOES NOT WORK FOR TYPE MULTIPOLYGON!
    if (!this.opacity) { this.opacity = .1; };
    if (!this.customlabels) { this.customlabels = []; };
    if (!this.binmethod) { this.binmethod = "equalint" };
  }

  checkallok() {
    let res;
    if (!this.selectmap) {
      res = this.data && this.basemap;
      if (res) {
        res = this.data.length > 0 && this.basemap.features;
      }

    }
    else {
      res = this.basemap;
      if (res) {
        res = this.basemap.features;
      }

    }

    return res;
  }
  preparedom(divid) {
    if (document.getElementById(divid)) { document.getElementById(divid).remove();};
    let mapcontainer = this.renderer.createElement("div");
    this.renderer.setProperty(mapcontainer, 'id', divid);
    this.renderer.addClass(mapcontainer, "mapdiv");    
    if (document.getElementById("map-frame")!==null){
      this.renderer.appendChild(document.getElementById("map-frame"), mapcontainer);}
    return true;
  }

  async initMap(divid) {
    // Init
    let mymap;
    this.mapok = false;
    let colors = this.colorscale;
    let cutoffs = this.cutofflist;
    let thedata;
    if (this.data) {
      thedata = Object.assign(this.data);
    }
    let propname = this.feature;
    let theid = this.id;
    let theopacity = this.opacity;
    let basestyle = {
      weight: 1,
      dashArray: '',
      "color": "grey",
      "fillOpacity": theopacity,
      "Opacity": theopacity
    };

    // If to many regions set weight to 0
    if (thedata.length > 30 ){
      basestyle.weight=0;
    };

    // Prepare dom
    this.firstload= false;
    let removed = false;
    await this.preparedom(divid);
    // Load Map

    if (this.debug){
      console.log('center: ',this.center );
    }
    try {
    mymap = await L.map(divid, { center: this.center, zoom: this.Zoom });
    }
    catch(e){
      document.getElementById(divid).remove();
      await this.preparedom(divid);
      mymap = await L.map(divid, { center: this.center, zoom: this.Zoom });
    };
    if (this.debug){
      console.log('Map created');
    }

    // Fix Icons see https://stackoverflow.com/questions/41144319/leaflet-marker-not-found-production-env
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Marker.prototype.options.icon = iconDefault;

    // Load Tiles
    let theprovider = this.useprovider;
    const tiles = L.tileLayer(this.providers[theprovider],
      {
        maxZoom: 19, opacity: 1,
        attribution: this.attributions[theprovider]
      });
    tiles.addTo(mymap);
    mymap.attributionControl.setPrefix('<a href="https://www.zidatasciencelab.de"><strong>Zi</strong> Data Science Lab</a>');
    tiles.getContainer().className += ' custombgmap';

    // Chloropleth Map
    if (!this.selectmap) {

      // Layer
      const geojsonFeature: FeatureCollection = Object.assign(this.basemap);
      if (this.percent) {
        for (let item of thedata) {
          if (item[this.feature]){
            item['___thevalue'] = Math.round(item[this.feature] * 10000) / 100;
          }
          else {
            item['___thevalue']=null;
          }
        }
      }
      else {
        for (let item of thedata) {         
          if (item[this.feature]){
            item['___thevalue'] = item[this.feature];
          }
          else {
            item['___thevalue']=null;
          }
        }
      }
      for (let item of geojsonFeature.features) {
        let value = this.api.filterArray(thedata, this.id, item.properties[this.id]);
        if (value.length > 0) {
          item['properties'][propname] = value[0]['___thevalue'];
        }
        else {
          item['properties'][propname] = null;
        }
      }
      if (this.debug){
        console.log('Map Features',geojsonFeature.features);
        console.log("Data:",this.data);
      }
      


      if (!cutoffs) {
        cutoffs = this.makecutoffs(this.api.getValues(thedata, '___thevalue'), this.binmethod, this.bins);
      };
      if (colors.length < cutoffs.length) {
        colors = this.makescale(cutoffs.length)
      }

      let myStyle = function (feature) {
        let thevalue = feature.properties[propname];
        let i = 0;
        let result = basestyle;
        let thecolor = colors[0];
        for (let colorcode of colors) {
          if (thevalue > cutoffs[i]) {
            thecolor = colorcode;
          };
          i = i + 1;
        }
        if (thevalue != null) { result['color'] = thecolor; } 
        else {
          result['color'] = 'grey';
        };
        return result
      };
      // Infobox
      let info;
      info = L.control.layers();
      info.onAdd = function (map) {
        this._div = L.DomUtil.create('div');
        this.update();
        return this._div;
      };

      info.update = function (props) {

        this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "") + (props && props[propname] ? '<br><strong>Wert: </strong>' + props[propname].toLocaleString() : "");
        if (props) {
          L.DomUtil.addClass(this._div, 'maphoverinfo');
        }
        else {
          L.DomUtil.removeClass(this._div, 'maphoverinfo');
        }
      };

      info.addTo(mymap);

      // Add Features/Polygons to Map
      const featLayer = L.geoJSON(geojsonFeature,
        {
          style: myStyle,
          onEachFeature: (feature, layer) => (
            layer.on({
              mouseover: (e) => (this.highlightFeature(info, e)),
              mouseout: (e) => (this.resetFeature(info, e)),
              click: (e) => (this.zoomToFeature(mymap, e))
            })
          )
        });
      featLayer.resetStyle();
      featLayer.addTo(mymap);

      // Add Legend to Map
      let labels
      if (this.customlabels) { labels = this.customlabels; };

      let legend;
      legend = L.control.layers({}, {}, { position: 'topright' });
      let legendtitle = this.api.stringwrap(propname);

      legend.onAdd = function (map) {

        this._ldiv = L.DomUtil.create('div', 'customlegend');
        this._ldiv.innerHTML = '<p><strong>' + legendtitle + '</strong></p>';
        if (this.percent == true) {
          this._ldiv.innerHTML += '<p><em>Anteil in %</em></p>';
        }
        if (cutoffs) {
          for (var i = 0; i < cutoffs.length; i++) {
            if (labels.length == cutoffs.length) {
              this._ldiv.innerHTML +=
                '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                labels[i];
            }
            else {
              if (cutoffs.length > 4) {
                this._ldiv.innerHTML +=
                  '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> ' +
                  cutoffs[i].toLocaleString() + (cutoffs[i + 1] ? ' bis unter ' + cutoffs[i + 1].toLocaleString() + '<br>' : '+');
              }
              else {
                this._ldiv.innerHTML +=
                  '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                  (cutoffs[i + 1] ? 'bis ' + cutoffs[i + 1].toLocaleString() + "&nbsp;" : cutoffs[i].toLocaleString() + '+');
              }
            }
          }
        }

        return this._ldiv;
      };

      legend.addTo(mymap);
    }
    else {
      // Layer
      const geojsonFeature: FeatureCollection = Object.assign(this.basemap);
      colors = this.makescale(2);
      let myStyle = function (feature) {
        let res = basestyle;
        let thecolor= "grey";
        if (feature.properties['___clicked']) {
          thecolor = colors[1];
        }
        res['color']=thecolor;
        return res;
      }

      const featLayer = L.geoJSON(geojsonFeature,
        {
          style: myStyle,
          onEachFeature: (feature, layer) => (
            layer.on({
              mouseover: (e) => (this.highlightFeature(info, e)),
              mouseout: (e) => (this.resetFeature(info, e)),
              click: (e) => (this.selectarea(mymap, e))
            })
          )
        });
      featLayer.addTo(mymap);

      // Infobox
      let info;
      info = L.control.layers();
      info.onAdd = function (map) {
        this._div = L.DomUtil.create('div');
        this.update();
        return this._div;
      };

      info.update = function (props) {

        this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "");
        if (props) {
          L.DomUtil.addClass(this._div, 'maphoverinfo');
        }
        else {
          L.DomUtil.removeClass(this._div, 'maphoverinfo');
        }
      };

      info.addTo(mymap);

    }
    this.mapok=true;

  };

  highlightFeature(info, e) {
    const layer = e.target;
    layer.setStyle({
      opacity: 1,
      fillOpacity: this.opacity * 1.1
    });
    info.update(layer.feature.properties);
  }

  resetFeature(info, e) {
    const layer = e.target;
    layer.setStyle({
      opacity: 1,
      fillOpacity: this.opacity,
    });
    info.update();
  }

  makecutoffs(array, method = "equalint", bins) { 
    let result = [];
    let minv = Math.min(...array);
    let maxv = Math.max(...array);

    // equalint    
    if (method=='equalint'){
    let steps = Math.round((maxv - minv) / bins);
    let i = 0;
    while (i < bins) {
      result.push((i + 1) * steps + minv);
      i = i + 1;
    };
    if (this.debug){
      console.log("CUTOFF RESULT",result,"\ninputarray",array);
    }
    };

   // equal group size 
   if (method=='equalgroupsize'){    
    let sortedarray = this.api.filterNA(array.sort((a,b)=>parseFloat(a)-parseFloat(b)));
    let arraylength = sortedarray.length;
    let groupsize= Math.floor(arraylength/bins);    
    for (let thebin of Array.apply(null, {length: bins}).map(Number.call, Number)){
      if (thebin==0){
        result.push(sortedarray[0])
      }
      else {
        result.push(sortedarray[groupsize*thebin]);
      }
    }
    if (this.debug){
      console.log("CUTOFF RESULT",result.sort(),"\ninputarray",sortedarray,"Group Size",groupsize);
    }     
    };
   
    return result;

  };


  newclick(e){
    let res = [];
    for (let item of this.basemap.features){
      if (item.properties[this.id]==e){
        item.properties['___clicked']=true;
      }
      else {
        item.properties['___clicked']=false;
      }
      res.push(item);
    }
    this.basemap['features']=res;
    this.initMap(this.containername);
  }

  zoomToFeature(map, e) {
    map.fitBounds(e.target.getBounds());
    this.clicked.emit(e.target.feature.properties[this.id]);
    this.clickedvalue = e.target.feature.properties[this.id];
  }

  selectarea(map, e) {
    map.fitBounds(e.target.getBounds());
    this.clicked.emit(e.target.feature.properties[this.id]);
    this.clickedvalue = e.target.feature.properties[this.id];
    this.newclick(e.target.feature.properties[this.id]);
  }

  makescale(bins = 5) {
    return chroma.scale([chroma(this.api.primarycolor).set('hsl.h', -120), this.api.primarycolor]).colors(bins);
  }

  getcenter() {
    let features = this.basemap.features;
    let coords = { 'a': [], 'b': [] };
    for (let item of features) {
      for (let area of item.geometry.coordinates) {
        for (let subarea of area) {          
          coords['a'].push(subarea[0])
          coords['b'].push(subarea[1])
          
        }
      }
    }
    if (this.debug){
      console.log("CENTER FEATURES:",this.basemap.features);
      console.log("CENTER COORDS:",coords);
    }
    let a = coords['a'].reduce((pv, cv) => pv + cv, 0) / coords['a'].length;
    let b = coords['b'].reduce((pv, cv) => pv + cv, 0) / coords['b'].length;

    return [b, a]
  }

donothing(e){
  return null;
};
}


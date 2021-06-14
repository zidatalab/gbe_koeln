import { Component, OnInit, Input,  Renderer2 } from '@angular/core';
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
  @Input() data: any;
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
  @Input() bins: number;
  @Input() id: string; // feature id
  @Input() percent: boolean;
  @Input() clicked: any; // bind click events
  legend: any;
  map: any;
  @Input() containername : string;
  useprovider = 0;
  providers = ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png']
  attributions =['Kartenmaterial &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  '©OpenStreetMap, ©CartoDB'];
  constructor(private http: HttpClient, private renderer:Renderer2, private api: ApiService) { }
  ngOnInit(): void {
    // Init vars
    this.resetprops();
  }
  ngAfterViewInit(): void {
    // Import Map data
    if (this.checkallok()){
      this.initMap(this.containername);                     
    }
  }


  ngOnChanges(changes: any) {
    // On any change replace the map-container
    if ((changes.data || changes.basemap) && this.checkallok() ){     
      this.resetprops();   
      this.initMap(this.containername);                           
    };
    
    }

  resetprops(){
    if (!this.containername){this.containername="mapdiv"+Math.round(Math.random()*1000).toString()+"_"+Math.round(Math.random()*1000).toString();};
    if (!this.Zoom) { this.Zoom = 5; };
    if (!this.center) { this.center = this.getcenter();};// [51.948, 10.265]; };
    if (!this.opacity) { this.opacity = .1; };
    if (!this.customlabels) { this.customlabels = []; };       
    if (!this.binmethod){this.binmethod="equalint"}; 
  }

  checkallok(){
    let res = this.data && this.basemap;
    if (res){
      res = this.data.length>0 && this.basemap.features;
    }
    return res;
  }
  preparedom(divid){
    if(document.getElementById(divid))
      {document.getElementById(divid).remove()};
      let mapcontainer = this.renderer.createElement("div");
      this.renderer.setProperty(mapcontainer, 'id', divid);
      this.renderer.addClass(mapcontainer,"mapdiv");
      this.renderer.appendChild(document.getElementById("map-frame"), mapcontainer);   
    return true;
  }

  initMap(divid): void {
    let mymap;
    this.preparedom(divid);
    mymap = L.map(divid,       { center: this.center, zoom: this.Zoom }
      );
      

   

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


    
    // Openstreetmap Tiles
    let theprovider = this.useprovider;
    const tiles = L.tileLayer(this.providers[theprovider],
      {
        maxZoom: 19, opacity: 1,
        attribution: this.attributions[theprovider]
      });
    tiles.addTo(mymap);
    mymap.attributionControl.setPrefix('<a href="https://www.zidatasciencelab.de"><strong>Zi</strong> Data Science Lab</a>');
    tiles.getContainer().className += ' custombgmap'; 
    const geojsonFeature: FeatureCollection = Object.assign(this.basemap);
    let colors = this.colorscale;
    let cutoffs = this.cutofflist;
    const thedata = Object.assign(this.data);
    let propname = this.feature;
    let theid = this.id;
    let theopacity = this.opacity;
    if (this.percent){
      for (let item of thedata){
       item['___thevalue']=Math.round(item[this.feature]*1000)/10;
      }
    }
    for (let item of geojsonFeature.features){
      let value  = this.api.filterArray(thedata,this.id,item.properties[this.id])[0]['___thevalue'];
      item['properties'][propname]=value;
    }
    
    
    if (!cutoffs) {
      cutoffs= this.makecutoffs(this.api.getValues(thedata,'___thevalue'),this.binmethod,this.bins);          
     };
    if (colors.length<cutoffs.length){
      colors = this.makescale(cutoffs.length)
    }
    let myStyle = function (feature) {
      let thevalue = feature.properties[propname];
      let i = 0;
      let thecolor = "grey";
      if (thevalue){thecolor=colors[0];}
      let result = {
        weight: 2,
        dashArray: '',
        "color":thecolor,
        "fillOpacity":theopacity   ,
        "Opacity":theopacity  
      };
      for (let colorcode of colors) {
        if (thevalue > cutoffs[i]) {
          thecolor = colorcode;
        };
        i = i + 1;
      }
      
      result['color']= thecolor;
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
      
      this._div.innerHTML = (props ? '<strong>Gebiet: </strong>'+props[theid] : "") +   (props ? '<br><strong>Wert: </strong>' + props[propname].toLocaleString() : "")  ;  
     if (props){
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
    if (this.customlabels){labels=this.customlabels;};

    let legend ;
    legend = L.control.layers({}, {}, { position: 'topright' });

    legend.onAdd = function(map){

      this._ldiv = L.DomUtil.create('div', 'customlegend');
      this._ldiv.innerHTML = '<p><strong>' + propname + '</strong></p>';
      if (this.percent==true){
        this._ldiv.innerHTML += '<p><em>Anteil in %</em></p>';
      }
      if (cutoffs){
      for (var i = 0; i < cutoffs.length; i++) {
        if (labels.length == cutoffs.length) {
          this._ldiv.innerHTML +=
            '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
            labels[i];
        }
        else {
          if (cutoffs.length>4){
          this._ldiv.innerHTML +=
            '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> ' +
            cutoffs[i].toLocaleString() + (cutoffs[i+1]  ? ' bis unter ' + cutoffs[i+1].toLocaleString() + '<br>' : '+');
          }
          else {
            this._ldiv.innerHTML +=
            '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
            (cutoffs[i+1] ? 'bis '+cutoffs[i+1].toLocaleString() +"&nbsp;" : cutoffs[i].toLocaleString()+'+');
          }
        }
      }
    }

      return this._ldiv;
    };

    legend.addTo(mymap);


  };

  highlightFeature(info, e) {
    const layer = e.target;
    layer.setStyle({
      opacity: 1,
      fillOpacity: this.opacity*1.2
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
    let steps = Math.round((maxv - minv)/bins);
    let i = 0;
      while (i < bins) {
        result.push((i + 1) * steps + minv);
        i = i+1;
      }
    return result;

  }

  
  
  zoomToFeature(map, e) {
    map.fitBounds(e.target.getBounds());
    this.clicked = e.target.feature.properties[this.id];
  }

  makescale(bins=5){
   return chroma.scale([chroma(this.api.primarycolor).set('hsl.h', -120),this.api.primarycolor]).colors(bins);
  }

  getcenter(){
    let features = this.basemap.features;
    let coords = {'a':[],'b':[]};
    for (let item of features){
      for (let area of item.geometry.coordinates){
        for (let subarea of area){
        coords['a'].push(subarea[0])
        coords['b'].push(subarea[1])
        }
      }
    }
    let a = coords['a'].reduce((pv, cv) => pv + cv, 0)/coords['a'].length;
    let b = coords['b'].reduce((pv, cv) => pv + cv, 0)/coords['b'].length;
  
    return [b,a]
  }


}


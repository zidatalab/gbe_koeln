import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  @Input() data: any;
  @Input() xvalue: string;
  @Input() colorby: string;
  @Input() outcomes: any;
  @Input() outcomelabels = [];
  @Input() plottype: String; // ["bar","hbar","tsline"]; 
  @Input() customdata: any;
  @Input() customconfig: any;
  @Input() customlayout: any;
  @Input() custommargins: any;
  @Input() linewidth: number;
  @Input() showlegend: boolean;
  @Input() sort: boolean;
  @Input() percent: boolean;
  @Input() percentx: boolean;
  @Input() basecolor = "";
  @Input() colorscheme = [];
  @Input() annotations = [];
  @Input() hovertemplate = "";
  @Input() plottitle = "";
  @Input() plotsubtitle = "";
  @Input() plotcaption = "";
  @Input() n_yticks = 8;
  @Input() xtickformat = "";
  @Input() xtitle = "";
  @Input() ytitle = "";
  @Input() id = "";
  @Input() divid = "";
  @Input() fontfamily = "Lato, sans-serif";
  @Input() fontsize = ".85rem";
  @Input() fontcolor= "black";
  @Input() legendbg='ffffff20'; 
  @Input() legendposx='right'; 
  @Input() legendposy=1; 
  @Output() clicked = new EventEmitter<string>();

  constructor(private api:ApiService) { }
  plotlayout: any;
  plotdata: any;
  mainconfig: any;
  plotlytype: string;
  clickedvalue:any;

  ngOnInit(): void {
    if (this.divid==""){this.divid= "plotdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString();}
    if (!this.linewidth) { this.linewidth = 2 };
    if (this.basecolor=="") { this.basecolor=this.api.primarycolor};   
    if (this.colorscheme.length==0){this.colorscheme=[this.basecolor];}
    this.make_plot();
  }

  

  ngOnChanges(changes: any) {
    setTimeout(()=>{this.make_plot()},0);
  }

  reportclick(input){
    this.clicked.emit(input);
    this.clickedvalue = input;    
  }


  make_plot() {
    this.mainconfig = {
      displayModeBar: false,
      scrollZoom: false,
      autosizable: true,
      locale: 'de',
      doubleClick: 'reset',
      showAxisDragHandles: false,
      showAxisRangeEntryBoxes: false,
      showTips: true
    };
    if (this.plottype == "bar") {
      this.plotlytype = "bar";
      this.plotlayout = {
        xaxis: { fixedrange: false, type: 'category', automargin: false },
        yaxis: { fixedrange: true, showgrid: false, title: '', 
        automargin: true, rangemode: 'tozero',ticksuffix:" " , nticks:this.n_yticks},
        autosize: true, padding: 0,
        legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
        margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
        annotations: this.annotations
      };
      if (this.percent){
        this.plotlayout.yaxis.tickformat = ',.1%';
      }
    }

    if (this.plottype == "violin") {
      this.plotlytype = "violin";
      this.plotlayout = {
        xaxis: { fixedrange: false, type: 'category', automargin: false },
        yaxis: {  zeroline: false , automargin: true, rangemode: 'tozero',ticksuffix:" " },
        autosize: true, padding: 0,
        legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
        margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
        annotations: this.annotations
      };
      if (this.percent){
        this.plotlayout.yaxis.tickformat = ',.1%';
      }
    }

    if (this.plottype == "stackedbar") {
      this.plotlytype = "bar";
      this.plotlayout = {
        barmode: "stack",
        xaxis: { fixedrange: false, showgrid: false, type: 'category', automargin: false},
        yaxis: { fixedrange: true, title: '',  autosize: true, automargin: true, 
        rangemode: 'tozero',ticksuffix:" " , 
        zerolinecolor: this.fontcolor,
        zerolinewidth: 2,
        nticks:this.n_yticks},
        padding: 0,
        legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
        margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
        annotations: this.annotations
      };
    
    }

    if (this.plottype == "tsline" || this.plottype == "lines" || this.plottype == "area" || this.plottype == "stackedarea" || this.plottype == 'scatter') {
      this.plotlytype = "lines";
      this.plotlayout = {
        xaxis: { fixedrange: false, showgrid: false, automargin: false ,zeroline: false},
        yaxis: {
          fixedrange: true, title: '', automargin: true, rangemode: 'tozero',
          gridcolor: "lightgrey",
          gridpattern: "dot",
          gridwidth: 1,
          zerolinecolor: this.fontcolor,
          zerolinewidth: 2,
          annotations: this.annotations,
          ticksuffix:" ",
          nticks:this.n_yticks          
        },
        autosize: true, padding: 0,
        legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
        margin: { l: 0, r: 20, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent"
      };
      if (this.percent){
        this.plotlayout.yaxis.tickformat = ',.1%';
      }
      if (this.percentx){
        this.plotlayout.xaxis.tickformat = ',.1%';
      }
    }

    if (this.plottype == "hbar") {
      this.plotlytype = "hbar";
      this.plotlayout = {
        xaxis: { fixedrange: true, showgrid: true, title: '',       
          automargin: true, nticks:this.n_yticks },
        yaxis: { fixedrange: false, type: 'category', automargin: true, 
        rangemode: 'tozero' ,ticksuffix:" ",
        zerolinecolor: this.fontcolor,
        zerolinewidth: 2},
        autosize: true, padding: 0,
        legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
        margin: { l: 200, r: 0, b: 20, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
        annotations: this.annotations

      };
    }
    if (this.custommargins) {
      this.plotlayout['margin'] = this.custommargins;
    }
    if (this.showlegend) {
      this.plotlayout['showlegend'] = true;
    }

    if (this.xtickformat!=''){
      this.plotlayout['xaxis']['tickformat']=this.xtickformat;
    }

    this.plotlayout['font']= {
      family: this.fontfamily,
      size: this.fontsize,
      color: this.fontcolor
    };
    
    if (this.xtitle!==""){
      this.plotlayout['xaxis']['title']=this.xtitle;
      this.plotlayout['xaxis']['titlefont']=
      {
        family: this.fontfamily,
        size: this.fontsize,
        color: this.fontcolor
      };

    }
    if (this.ytitle!==""){
      this.plotlayout['yaxis']['title']=this.ytitle;
      this.plotlayout['yaxis']['titlefont']=
      {
        family: this.fontfamily,
        size: this.fontsize,
        color: this.fontcolor
      };

    }

    let plotdata = []
    for (let item of this.data){
      plotdata.push(item);
    }
    if (this.sort){
      plotdata=this.api.sortArray(plotdata,this.outcomes[0]);
    }
    
    
    let outcomes = this.outcomes;
    if (this.colorby) {
      outcomes = this.api.getuniqueValues(plotdata, this.colorby);
      if (outcomes.length>1){
        this.colorscheme=this.api.makescale(outcomes.length);
      }      
      plotdata = this.make_colorbyvalues();
    }
  
   this.plotdata = this.make_plotdata(plotdata, this.xvalue, outcomes, this.plotlytype);    
   // DEBUG
   
  }

  make_colorbyvalues() {
    let newdata = [];
    let inputdata = this.data;
    let thecolorvalues = this.api.getuniqueValues(inputdata, this.colorby).sort();
    let thexvalues = this.api.getuniqueValues(inputdata, this.xvalue);
    let theoutcome = this.outcomes[0];
    for (let xvalue of thexvalues) {
      let topush = {};
      topush[this.xvalue] = xvalue;
      for (let tocolor of thecolorvalues) {
        let datapoint = this.api.filterArray(this.api.filterArray(inputdata, this.colorby, tocolor), this.xvalue, xvalue)[0];
        if (datapoint) {
          topush[tocolor] = datapoint[theoutcome];
        }
      }
      newdata.push(topush);
    }
    return newdata;

  }



  make_trace(xdata, ydata = [], name: string, type = "") {
    let trace = {
      x: xdata,
      y: ydata,
      name: name,
      type: type
    }
    if (this.plottype == "stackedarea") {
      trace['stackgroup'] = "one";
    }
    if (this.hovertemplate != "") {
      trace['hovertemplate'] = this.hovertemplate;
    }
    return trace;
  }

  make_plotdata(source = [], xaxis = "", ylist = [], type = "bar", colors = this.colorscheme) {
    let xdata = this.api.getValues(source, xaxis)
    let list = []
    let i = 0
    for (let name in ylist) {
      let theydata = this.api.getValues(source, ylist[i]);
      let tracename = ylist[i];
      if (this.outcomelabels.length == ylist.length){
        tracename = this.outcomelabels[i];
      }
      let trace = this.make_trace(xdata, theydata  ,tracename, type = type);
      if (type == "hbar") {
        trace = this.make_trace(this.api.getValues(source, ylist[i]), xdata, ylist[i], type = "bar")
        trace["orientation"] = "h"
      }
      if (type == "bar" || type == "bar" || type == "scatter") {
        trace["marker"] = {
          color: colors[i]
        }     }
       
        
      
      if (type == "lines") {
        trace["line"] = {
          color: colors[i],
          width: this.linewidth*2          
        }
        trace["marker"] = {
          color: colors[i],
          size: this.linewidth*5
        }
      }
      if (this.plottype == "area") {
        trace["fill"] = "tozeroy";
      }
      if (this.plottype == "violin") {
        trace = this.make_trace(name, theydata  , ylist[i], type = type);
        trace['x']=name;
        trace["line"] = {
          color: colors[i],
          width: this.linewidth
        }
      }
      if (this.plottype == "scatter") {
        trace['mode']='markers';
        trace["marker"] = {
          color: colors[i],
          size: this.linewidth*5
        }
        if (this.id!=""){
          trace["text"] =  this.api.getValues(source, this.id);   
          trace["textfont"]={family: this.fontfamily}; 
          if (trace['x'].length<50){
            trace['mode']='markers+text';    
            trace['textposition']= 'bottom center';
          }  
          else {
            trace['mode']='markers';    
          }


          
        }
        
        }

      list.push(trace)
      i = i + 1
    }
    return list
  } 
 
 
}

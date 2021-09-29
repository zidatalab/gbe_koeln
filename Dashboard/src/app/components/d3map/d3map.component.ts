import { Component, OnInit, OnChanges,Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3map',
  templateUrl: './d3map.component.html',
  styleUrls: ['./d3map.component.scss']
})
export class D3mapComponent implements OnInit, OnChanges {
  @Input() private data: Array<any>;
  @Input() private basemap: Array<any>;
  @Input() private feature: String;
  private margin: any = 60;
  private svg: any;
  private height: number=200;
  private width: number=400;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.data = [
      {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
      {"Framework": "React", "Stars": "150793", "Released": "2013"},
      {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
      {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
      {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
    ];
    this.createSvg();
    this.drawPlot();

  }

  ngOnChanges() {
    
  }

  private createSvg(): void {
    this.svg = d3.select("figure#map")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([2009, 2017])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');

    dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.Released))
    .attr("cy", d => y(d.Stars))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "red");

    dots.selectAll("text")
    .data(this.data)
    .enter()
    .append("text")
    .text(d => d.Framework)
    .attr("x", d => x(d.Released))
    .attr("y", d => y(d.Stars))
  }

}

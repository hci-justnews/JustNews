import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import {
  ILineChartOptions,
  IChartistAnimationOptions,
  IChartistData, IResponsiveOptionTuple,
  IBarChartOptions
} from 'chartist';
import { ChartEvent, ChartType, ResponsiveOptions } from 'ng-chartist';
import * as d3 from 'd3';
import * as $ from 'jquery';
import { range } from 'd3';
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chartElement: ElementRef;
  chartProps: any;
  currentWeek = [[0, 1], [0.25, 1.25], [0.5, 1.25], [0.75, 1], [1, 0.5], [1.25, 0.25], [1.5, 0], [1.75, -0.25], [2, 0.25], [2.25, 0], [2.5, -0.5], [2.75, 0], [3, 0.25], [3.25, 0.25], [3.5, 0.25], [3.75, 0], [4, -0.25], [4.25, -0.5], [4.5, -0.5], [4.75, -1], [5, -0.5], [5.25, -0.25], [5.5, 0], [5.75, -0.25], [6, -0.25]]
  lastWeek = [[0, -2], [0.25, -1.5], [0.5, -1.25], [0.75, -1], [1, -1.0], [1.25, -1.25], [1.5, -1.5], [1.75, -1.5], [2, -1], [2.25, -1], [2.5, -0.25], [2.75, -0.25], [3, 0.5], [3.25, 0.5], [3.5, 0], [3.75, -1], [4, -1], [4.25, -1.25], [4.5, -1.5], [4.75, -1.25], [5, -1.5], [5.25, -1.75], [5.5, -1.25], [5.75, -1.25], [6, -1.25]]
  constructor() {
  }
  getData() {
    var n = 120
    var currentWeek = []
    var lastWeek = []
    for (var x in range(n)) {
    }
    this.currentWeek = currentWeek
    console.log(currentWeek)

  }
  getX(min, max) // min and max included
  {

    return Math.floor(Math.random() * 7.0);
  }
  randomYInterval(min, max) // min and max included
  {
    return Math.floor(Math.random() * 5.0) - 2.0;
  }
  ngOnInit() {
    this.buildChart();
  }
  buildChart() {
    this.chartProps = {};
    var margin = { top: 20, right: 10, bottom: 50, left: 80 },
      width = 650 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
    this.chartProps.x = d3.scaleLinear().range([0, width]);
    this.chartProps.y = d3.scaleLinear().range([height, 0]);
    var xAxis = d3.axisBottom(this.chartProps.x).tickFormat((d, i) => { return _this.getXLabel(d, i) }).ticks(7).tickPadding(height / 2);
    var yAxis = d3.axisLeft(this.chartProps.y).ticks(5).tickFormat((d, i) => { return _this.getYLabel(d, i) });
    let _this = this;
    var valueline = d3.line<number[]>()
      .x(function (d) {
        return _this.chartProps.x(d[0]);
      })
      .y(function (d) { console.log(d); return _this.chartProps.y(d[1]) });

    var tooltip = d3.select(_this.chartElement.nativeElement).append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("opacity", 0);

    var svg = d3.select(this.chartElement.nativeElement)
      .append("svg")
      .style("background-color", '#fafafa')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        'translate(' + margin.left + ',' + margin.top + ")");

    this.chartProps.x.domain([0, 7]);
    this.chartProps.y.domain([-2, 2]);

    var tipMouseover = function (d) {
      var html = "HEY";
      tooltip.html(html)
        .style("left", (d3.event.pageX + 15) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
        .transition()
        .duration(200) // ms
        .style("opacity", .9) // started as 0!

    };

    var tipMouseout = function (d) {
      tooltip.transition()
        .duration(300) // ms
        .style("opacity", 0); // don't care about position!
    };
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height / 2) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    svg.append("path")
      .attr("class", "line line1")
      .style('stroke', '#6da3f6')
      .style("stroke-width", 3)
      .style('fill', 'none')
      .style("stroke-linejoin", "round")
      .attr("d", valueline(_this.currentWeek));
    svg.selectAll("dot")
      .data(_this.currentWeek)
      .enter().append("circle")
      .attr("r", 6)
      .style("fill", "#6da3f6")

      .attr("cx", function (d) { return _this.chartProps.x(d[0]); })
      .attr("cy", function (d) { return _this.chartProps.y(d[1]); })
      .on("mouseover", tipMouseover)
      .on("mouseout", tipMouseout);
    svg.append("path")
      .attr("class", "line line2")
      .style('stroke', '#2e7ef6')
      .style("stroke-width", 3)
      .style("stroke-linejoin", "round")
      .style('fill', 'none')
      .attr("d", valueline(_this.lastWeek));



    svg.selectAll("dot")
      .data(_this.lastWeek)
      .enter().append("circle")
      .attr("r", 3)
      .style("fill", "#2e7ef6")
      .attr("cx", function (d) { return _this.chartProps.x(d[0]); })
      .attr("cy", function (d) { return _this.chartProps.y(d[1]); })
      .on("mouseover", tipMouseover)
      .on("mouseout", tipMouseout);

    this.chartProps.svg = svg;
    this.chartProps.valueline = valueline;
    this.chartProps.xAxis = xAxis;
    this.chartProps.yAxis = yAxis;
  }
  getXLabel(d, i) {
    var lst = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    return lst[i];
  }
  getYLabel(d, i) {
    var lst = {
      "-2": "Strong Left", "-1": "Left", "0": "Neutral", "1": "Right", "2": "Strong Right"
    }
    return lst[d.toString()];
  }


}

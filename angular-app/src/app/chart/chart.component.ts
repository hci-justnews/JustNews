import { Component, OnInit } from '@angular/core';
import {
  ILineChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
@Component({
  selector: 'chart',
  template: `
  <x-chartist
      [type]="type"
      [data]="data"
      [options]="options"
      [events]="events"
    ></x-chartist>`,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  type: ChartType = 'Line';
  data: IChartistData = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  };

  options: ILineChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 300,
    width: 500,
    showArea: true
    
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}

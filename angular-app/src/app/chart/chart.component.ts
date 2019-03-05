import {Component, OnInit} from '@angular/core';
import {
  ILineChartOptions,
  IChartistAnimationOptions,
  IChartistData, IResponsiveOptionTuple
} from 'chartist';
import {ChartEvent, ChartType, ResponsiveOptions} from 'ng-chartist';

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

  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: [
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa',
      'Su',
    ],
    series: [
      [{value: 40, className: 'high'}, {value: 7.8, className: 'high'}, {value: -9, className: 'low'},
        {value: -27, className: 'low'}, {value: -25, className: 'low'}, {value: 67, className: 'high'}
        , {value: 75, className: 'high'}]
    ],
  };
  options: ILineChartOptions = {

    axisX: {
      showGrid: false,
    },
    height: "300px",
    width: "100%",
    high: 100,
    low: -100,
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

  constructor() {
  }

  ngOnInit() {
  }

}

import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements AfterViewInit {
  @Input() posFeedback: number;
  @Input() negFeedback: number;
  @Input() neutralFeedback: number;
  public totalFeedback: number;

  @ViewChild('myGraph') graph: ElementRef;
  ngAfterViewInit() {
    this.totalFeedback = this.posFeedback + this.negFeedback + this.neutralFeedback;
    this.renderChart();
  }

  renderChart() {
    jQuery(this.graph.nativeElement).highcharts({
      chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Sentiment Analysis'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        type: 'pie',
        name: 'Feedback',
        data: [
          ['Positive', (this.posFeedback / this.totalFeedback) * 100],
          ['Negative',  (this.negFeedback / this.totalFeedback) * 100],
          ['Neutral',   (this.neutralFeedback / this.totalFeedback) * 100]
        ]
      }]
    });
  }
}

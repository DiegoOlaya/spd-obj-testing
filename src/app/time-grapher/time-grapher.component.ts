import { Component, OnInit, ViewChild } from '@angular/core';

import { NumberTimeComponent } from '../number-time/number-time.component';
import { ObjectTimeComponent } from '../object-time/object-time.component';
import { PlotlyGrapherService } from '../plotly-grapher.service';

@Component({
  selector: 'app-time-grapher',
  templateUrl: './time-grapher.component.html',
  styleUrls: ['./time-grapher.component.css']
})

@ViewChild(NumberTimeComponent)
@ViewChild(ObjectTimeComponent)
export class TimeGrapherComponent implements OnInit {

  private timerComponents:any[];
  private cyclesArray:number[];
  private dataArray;

  public xAxisSet:boolean = false;
  public timingFinished:boolean = false;
  public randRange = 51;

  constructor(private grapher:PlotlyGrapherService) { }

  public setCyclesArray(start:number, end:number, increment:number) {
    this.cyclesArray = [];
    for (var i = start; i <= end; i += increment) {
      this.cyclesArray.push(i);
    }
    this.xAxisSet = true;
  }

  public takeTimeData() {
    this.dataArray = [];
    for (var i = 0; i < this.timerComponents.length; i++) {
      var timer = this.timerComponents[i];
      var traceData = [];
      for (var n = 0; n < this.cyclesArray.length; n++) {
        timer.startTiming(this.cyclesArray[n], this.randRange);
        traceData.push(timer.timingResult);
      }
      this.dataArray.push(traceData);
    }
    this.timingFinished = true;
  }

  public plotData() {
    this.grapher.setScatterData(this.cyclesArray, this.dataArray, undefined, ["Number Based Implementation", "Object Based Implementation"]);
    this.grapher.setLayout("Timing Results", "Number of Computation Cycles", "Time [ms]");
    this.grapher.plot("plotContainer");
    this.timingFinished = false;
  }

  ngOnInit() {
    this.timerComponents = [new NumberTimeComponent(), new ObjectTimeComponent()];
  }

}

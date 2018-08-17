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

  private timerComponents:any[]; //Stores an instance of each implementation component.
  private cyclesArray:number[];
  private dataArray; //Stores the data taken by takeTimeData()

  public xAxisSet:boolean = false; //Used to control user interface buttons.
  public timingFinished:boolean = false; //Used to control user interface buttons.
  public randRange = 51;

  constructor(private grapher:PlotlyGrapherService) { }

  /**
    Sets the parameters for how many cycles each implementation will be put through.
    @arg start:number. The initial number of cycles.
    @arg end:number. The final number of cycles.
    @arg increment:number. The interval by which to increment the number of cycles.
  */
  public setCyclesArray(start:number, end:number, increment:number) {
    this.cyclesArray = [];
    for (var i = start; i <= end; i += increment) {
      this.cyclesArray.push(i);
    }
    this.xAxisSet = true;
  }

  /**
    Times both implementations performing the exponent calculation a number of times
    determined by the cyclesArray. Records the results in dataArray.
  */
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

/**
  Plots the data from this.dataArray.
*/
  public plotData() {
    this.grapher.setScatterData(this.cyclesArray, this.dataArray, undefined, ["Number Based Implementation", "Object Based Implementation"]);
    this.grapher.setLayout("Timing Results", "Number of Computation Cycles", "Time [ms]");
    this.grapher.plot("plotContainer");
    this.timingFinished = false;
  }

  ngOnInit() {
    //Initialize array with an instance of each timer component.
    this.timerComponents = [new NumberTimeComponent(), new ObjectTimeComponent()];
  }

}

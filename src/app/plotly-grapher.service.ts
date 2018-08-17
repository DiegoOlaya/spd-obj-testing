// NOTE: FOR THIS COMPONENT TO WORK, YOU MUST PASTE THE FOLLOWING HTML TO
// src/index.html: <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>.

declare var Plotly:any;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlotlyGrapherService {

  private traceArray:object[] = [];
  private layout:object = undefined;

  constructor() { }

  /**
    Populates the data for a scatter plot.
    @arg xCoords:number[]. The x-coordinates shared by all data points.
    @arg yData:any[number[]]. The y-axis data points.
    @arg usrMode:string. Specifies the type of scatter plot desired.
    @arg traceNames:string. OPTIONAL. The names of the data series for use in the legend.
  */
  public setScatterData(xCoords:number[], yData:any[], usrMode:string="lines+markers", traceNames?:string[]) {
    this.traceArray = [];
    for (var i = 0; i < yData.length; i++) {
      var trace = {
        x: xCoords,
        y: yData[i],
        type: "scatter",
        mode: usrMode,
        name: ""
      }
      if (traceNames != undefined && traceNames.length == yData.length) {
        trace.name = traceNames[i];
      }
      else {
        trace.name = "trace" + i;
      }
      this.traceArray.push(trace);
    }
  }

  /**
    Sets the plot title and axis titles.
    @arg plotTitle:string. The main title of the plot.
    @arg xTitle:string. The x-axis title.
    @arg yTitle:string. The y-axis title.
  */
  public setLayout(plotTitle:string, xTitle:string, yTitle:string) {
    this.layout = {
      title: plotTitle,
      xAxis: {
        title: xTitle
      },
      yAxis: {
        title: yTitle
      }
    }
  }

  /**
    Plots the given data and configurations.
    @arg targetDivID:string. The ID of the div where the plot will go.
  */
  public plot(targetDivID:string) {
    if (this.layout != undefined) {
      Plotly.plot(targetDivID, this.traceArray, this.layout);
    }
    else {
      Plotly.plot(targetDivID, this.traceArray);
    }
  }

}

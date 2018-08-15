import { Component, OnInit, ViewChild } from '@angular/core';
import { ObjectTimeComponent } from '../object-time/object-time.component';
import { NumberTimeComponent } from '../number-time/number-time.component';

@Component({
  selector: 'app-test-accuracy',
  templateUrl: './test-accuracy.component.html',
  styleUrls: ['./test-accuracy.component.css']
})

//Allows access to child object methods.
@ViewChild(ObjectTimeComponent)
@ViewChild(NumberTimeComponent)

export class TestAccuracyComponent implements OnInit {

  public randNums:number[];
  public randRange = 51;
  //Store result of computation.
  public objResult:number[] = [];
  public numResult:number[] = [];

  constructor() { }

  public generateNums(range:number) {
    this.randNums = [];
    for (var i = 0; i < 20; i++) {
      this.randNums.push(Math.random() * range);
    }
  }

  public compute() {
    var objComp = new ObjectTimeComponent();
    var numComp = new NumberTimeComponent();
    numComp.timeSingle(this.randNums);
    objComp.startTiming(1, this.randNums);
    this.objResult = [objComp.compResult.getReal(), objComp.compResult.getImaginary()];
    this.numResult = [numComp.resultR, numComp.resultI];
  }

  ngOnInit() {
    this.generateNums(this.randRange);
  }

}

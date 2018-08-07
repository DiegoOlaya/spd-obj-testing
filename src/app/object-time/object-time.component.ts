import { Component, OnInit } from '@angular/core';
import { ComplexNum } from './complex-num';

@Component({
  selector: 'app-object-time',
  templateUrl: './object-time.component.html',
  styleUrls: ['./object-time.component.css']
})
export class ObjectTimeComponent implements OnInit {

  private complexNums:ComplexNum[];
  public randRange:number = 51;

  constructor() { }

  /**
    Generate 10 complex numbers for use in timing function.
  */
  private generateComplexNums() {
    this.complexNums = [];
    for (var i = 0; i < 10; i++) {
      this.complexNums.push(
        new ComplexNum(Math.random() * this.randRange, Math.random() * this.randRange)
      );
    }
  }

  ngOnInit() {
  }

}

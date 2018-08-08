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

  /**
    Calculate exponent from the comment on line 291 of spdcalc/src/pm-lib-momentum.js
  */
  private doCalculation() {
    this.complexNums[9].multiplyByConst(4);
    //A5^2/A1
    var Term2 = copyComplexNum(this.complexNums[4]);
    Term2.multiply(this.complexNums[4]); //A5^2
    Term2.divide(this.complexNums[0]); //A5^2/A1

    this.complexNums[5].multiply(this.complexNums[5]); //A6^2
    //A6^2/A2
    var Term3 = copyComplexNum(this.complexNums[5]);
    Term3.divide(this.complexNums[1]); //A6^2/A2
    //(-2*A1*A7)
    var Term4 = copyComplexNum(this.complexNums[0]); //A1
    Term4.multiplyByConst(-2);
    Term4.multiply(this.complexNums[6]);
    //(A5*A8)
    this.complexNums[4].multiply(this.complexNums[7]);
    //(-2*A1*A7)+(A5*A8)
    Term4.add(this.complexNums[4]);
    Term4.multiply(Term4); //[(-2*A1*A7)+(A5*A8)]^2
    //(4*A1*A3-A8^2)
    this.complexNums[2].multiply(this.complexNums[0]); //A1*A3
    this.complexNums[2].multiplyByConst(4); //4*A1*A3
    this.complexNums[7].multiply(this.complexNums[7]); //A8^2
    this.complexNums[2].subtract(this.complexNums[7]); //(4*A1*A3-A8^2)

    this.complexNums[2].multiply(this.complexNums[0]); //A1*(4*A1*A3-A8^2)

    Term4.divide(this.complexNums[2]); //([(-2*A1*A7)+(A5*A8)]^2)/[A1*(4*A1*A3-A8^2)]
    //A6^{2}*(-2*A2+A9)^{2}
    var Term5 = copyComplexNum(this.complexNums[1]);
    Term5.multiplyByConst(-2); //-2*A2
    Term5.add(this.complexNums[8]); //-2*A2+A9
    Term5.multiply(Term5); //(-2*A2+A9)^2
    Term5.multiply(this.complexNums[5]); //A6^{2}*(-2*A2+A9)^{2}
    //A2*(4*A2*A4-A9^2)
    this.complexNums[3].multiply(this.complexNums[1]);
    this.complexNums[3].multiplyByConst(4);
    this.complexNums[8].multiply(this.complexNums[8]);
    this.complexNums[3].subtract(this.complexNums[8]);
    this.complexNums[3].multiply(this.complexNums[1]);
    //[A6^{2}*(-2*A2+A9)^{2}]/[A2*(4*A2*A4-A9^2)]
    Term5.divide(this.complexNums[3]);
    this.complexNums[9].subtract(Term2);
    this.complexNums[9].subtract(Term3);
    this.complexNums[9].subtract(Term4);
    this.complexNums[9].subtract(Term5);
    this.complexNums[9].multiplyByConst(0.25); //Final exponential.
  }

  private copyComplexNum(cNum:ComplexNum) {
    return new ComplexNum(cNum.getReal(), cNum.getImaginary());
  }

  ngOnInit() {
  }

}

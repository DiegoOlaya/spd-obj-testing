import { Component, OnInit } from '@angular/core';
import { helpers } from './helpers';

@Component({
  selector: 'app-number-time',
  templateUrl: './number-time.component.html',
  styleUrls: ['./number-time.component.css']
})
export class NumberTimeComponent implements OnInit {

  public timingResult:number;
  public randRange:number = 51;
  //To confirm agreement between implementations.
  public resultR:number;
  public resultI:number;

  public startTiming(cycles:number, cNumList?:number[]) {
    var result = 0;
    for (var i = 0; i < cycles; i++) {
      result += this.timeSingle(cNumList);
    }
  }

  public timeSingle(cNumList?:number[]) {
    var timer = window.performance;
    var A1R:number,
        A1I:number,
        A2R:number,
        A2I:number,
        A3R:number,
        A3I:number,
        A4R:number,
        A4I:number,
        A5R:number,
        A5I:number,
        A6R:number,
        A6I:number,
        A7R:number,
        A7I:number,
        A8R:number,
        A8I:number,
        A9R:number,
        A9I:number,
        A10R:number,
        A10I:number;

    if (cNumList == undefined) {
      A1R = Math.random() * this.randRange,
      A1I = Math.random() * this.randRange,
      A2R = Math.random() * this.randRange,
      A2I = Math.random() * this.randRange,
      A3R = Math.random() * this.randRange,
      A3I = Math.random() * this.randRange,
      A4R = Math.random() * this.randRange,
      A4I = Math.random() * this.randRange,
      A5R = Math.random() * this.randRange,
      A5I = Math.random() * this.randRange,
      A6R = Math.random() * this.randRange,
      A6I = Math.random() * this.randRange,
      A7R = Math.random() * this.randRange,
      A7I = Math.random() * this.randRange,
      A8R = Math.random() * this.randRange,
      A8I = Math.random() * this.randRange,
      A9R = Math.random() * this.randRange,
      A9I = Math.random() * this.randRange,
      A10R = Math.random() * this.randRange,
      A10I = Math.random() * this.randRange;
    }
    else {
      A1R = cNumList[0],
      A1I = cNumList[1],
      A2R = cNumList[2],
      A2I = cNumList[3],
      A3R = cNumList[4],
      A3I = cNumList[5],
      A4R = cNumList[6],
      A4I = cNumList[7],
      A5R = cNumList[8],
      A5I = cNumList[9],
      A6R = cNumList[10],
      A6I = cNumList[11],
      A7R = cNumList[12],
      A7I = cNumList[13],
      A8R = cNumList[14],
      A8I = cNumList[15],
      A9R = cNumList[16],
      A9I = cNumList[17],
      A10R = cNumList[18],
      A10I = cNumList[19];
    }

    var start = timer.now();
    var EXP1R = A10R*4,
        EXP1I = A10I*4,

        // A5^2/A1
        EXP2R_a = helpers.cmultiplyR(A5R, A5I, A5R, A5I ),
        EXP2I_a = helpers.cmultiplyI(A5R, A5I, A5R, A5I ),
        EXP2R = helpers.cdivideR(EXP2R_a, EXP2I_a, A1R, A1I),
        EXP2I = helpers.cdivideI(EXP2R_a, EXP2I_a, A1R, A1I),

        // A6^2/A2
        EXP3R_a = helpers.cmultiplyR(A6R, A6I, A6R, A6I ),
        EXP3I_a = helpers.cmultiplyI(A6R, A6I, A6R, A6I ),
        EXP3R = helpers.cdivideR(EXP3R_a, EXP3I_a, A2R, A2I),
        EXP3I = helpers.cdivideI(EXP3R_a, EXP3I_a, A2R, A2I),

        // (-2 A1 A7 + A5 A8)^2/ (A1 (4 A1 A3 - A8^2))
        EXP4Ra_num = -2 * helpers.cmultiplyR( A1R, A1I, A7R, A7I),
        EXP4Ia_num = -2 * helpers.cmultiplyI( A1R, A1I, A7R, A7I),
        EXP4Rb_num = helpers.cmultiplyR( A5R, A5I, A8R, A8I),
        EXP4Ib_num = helpers.cmultiplyI( A5R, A5I, A8R, A8I),
        EXP4Rc_num  = helpers.caddR(EXP4Ra_num, EXP4Ia_num, EXP4Rb_num, EXP4Ib_num),
        EXP4Ic_num  = helpers.caddI(EXP4Ra_num, EXP4Ia_num, EXP4Rb_num, EXP4Ib_num),
        EXP4R_num   = helpers.cmultiplyR(EXP4Rc_num, EXP4Ic_num, EXP4Rc_num, EXP4Ic_num),
        EXP4I_num   = helpers.cmultiplyI(EXP4Rc_num, EXP4Ic_num, EXP4Rc_num, EXP4Ic_num),
        // Denominator
        EXP4Ra_den = -1 * helpers.cmultiplyR(A8R, A8I, A8R, A8I),
        EXP4Ia_den = -1 * helpers.cmultiplyI(A8R, A8I, A8R, A8I),
        EXP4Rb_den =  4 * helpers.cmultiplyR( A1R, A1I, A3R, A3I),
        EXP4Ib_den =  4 * helpers.cmultiplyI( A1R, A1I, A3R, A3I),
        EXP4Rc_den =  helpers.caddR( EXP4Ra_den, EXP4Ia_den, EXP4Rb_den, EXP4Ib_den ),
        EXP4Ic_den =  helpers.caddI( EXP4Ra_den, EXP4Ia_den, EXP4Rb_den, EXP4Ib_den ),
        EXP4R_den = helpers.cmultiplyR(A1R, A1I, EXP4Rc_den, EXP4Ic_den),
        EXP4I_den = helpers.cmultiplyI(A1R, A1I, EXP4Rc_den, EXP4Ic_den),
        EXP4R     = helpers.cdivideR(EXP4R_num, EXP4I_num, EXP4R_den, EXP4I_den),
        EXP4I     = helpers.cdivideI(EXP4R_num, EXP4I_num, EXP4R_den, EXP4I_den),

        // A6^2 (-2 A2 + A9)^2)/(A2 (4 A2 A4 - A9^2)))
        EXP5Rb_num = helpers.caddR( -2*A2R, -2*A2I, A9R, A9I),
        EXP5Ib_num = helpers.caddI( -2*A2R, -2*A2I, A9R, A9I),
        EXP5Rc_num = helpers.cmultiplyR( EXP5Rb_num, EXP5Ib_num,EXP5Rb_num, EXP5Ib_num),
        EXP5Ic_num = helpers.cmultiplyI( EXP5Rb_num, EXP5Ib_num,EXP5Rb_num, EXP5Ib_num),
        EXP5R_num  = helpers.cmultiplyR( EXP3R, EXP3I ,EXP5Rc_num, EXP5Ic_num),
        EXP5I_num  = helpers.cmultiplyI( EXP3R, EXP3I ,EXP5Rc_num, EXP5Ic_num),
        // Denominator
        EXP5Ra_den = -1 * helpers.cmultiplyR(A9R, A9I, A9R, A9I),
        EXP5Ia_den = -1 * helpers.cmultiplyI(A9R, A9I, A9R, A9I),
        EXP5Rb_den =  4 * helpers.cmultiplyR( A2R, A2I, A4R, A4I),
        EXP5Ib_den =  4 * helpers.cmultiplyI( A2R, A2I, A4R, A4I),
        EXP5R_den =  helpers.caddR( EXP5Ra_den, EXP5Ia_den, EXP5Rb_den, EXP5Ib_den ),
        EXP5I_den =  helpers.caddI( EXP5Ra_den, EXP5Ia_den, EXP5Rb_den, EXP5Ib_den ),
        // expression for fifth term
        EXP5R     = helpers.cdivideR(EXP5R_num, EXP5I_num, EXP5R_den, EXP5I_den),
        EXP5I     = helpers.cdivideI(EXP5R_num, EXP5I_num, EXP5R_den, EXP5I_den),

        // Full expression for term in the exponential
        EXP6R_a = helpers.caddR(EXP1R, EXP1I, -1*EXP2R, -1*EXP2I),
        EXP6I_a = helpers.caddI(EXP1R, EXP1I, -1*EXP2R, -1*EXP2I),
        EXP6R_b = helpers.caddR(EXP6R_a, EXP6I_a, -1*EXP3R, -1*EXP3I),
        EXP6I_b = helpers.caddI(EXP6R_a, EXP6I_a, -1*EXP3R, -1*EXP3I),
        EXP6R_c = helpers.caddR(EXP6R_b, EXP6I_b, -1*EXP4R, -1*EXP4I),
        EXP6I_c = helpers.caddI(EXP6R_b, EXP6I_b, -1*EXP4R, -1*EXP4I);
        this.resultR = 0.25 * helpers.caddR(EXP6R_c, EXP6I_c, -1*EXP5R, -1*EXP5I);
        this.resultI = 0.25 * helpers.caddI(EXP6R_c, EXP6I_c, -1*EXP5R, -1*EXP5I);
    var end = timer.now();
    return (end - start);
  }

  constructor() { }

  ngOnInit() {
  }

}

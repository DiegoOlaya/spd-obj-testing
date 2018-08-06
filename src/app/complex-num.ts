export class ComplexNum {

  private real:number;
  private imaginary:number;

  /**
    Creates a new instance of an imaginary number.
    @arg real Type: number. The value of the real portion.
    @arg imaginary Type: number. The value of the imaginary portion.
  */
  constructor(real:number, imaginary:number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
    Change the real number value to user provided value.
    @arg newReal Type: number. The value to change the real portion to.
  */
  public setReal(newReal:number) {
    this.real = newReal;
  }

  /**
    Change the imaginary number to user provided value.
    @arg newImaginary Type: number. The value to change the imaginary portion to.
  */
  public setImaginary(newImaginary:number) {
    this.imaginary = newImaginary;
  }

  /**
    Change both values to user provided values.
    @arg newReal Type: number. The new real value.
    @arg newImaginary Type: number. The new imaginary value.
  */
  public setValues(newReal:number, newImaginary:number) {
    this.setReal(newReal);
    this.setImaginary(newImaginary);
  }

  public multiply(cNum:ComplexNum) {
    
  }

}

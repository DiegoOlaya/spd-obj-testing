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
    Return the real part of the complex number.
  */
  public getReal() {
    return this.real;
  }

  /**
    Change the imaginary number to user provided value.
    @arg newImaginary Type: number. The value to change the imaginary portion to.
  */
  public setImaginary(newImaginary:number) {
    this.imaginary = newImaginary;
  }

  /**
    Return the imaginary part of the complex number.
  */
  public getImaginary() {
    return this.imaginary;
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

  /**
    Multiply this complex number by another complex number.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
    @arg cNum Type: ComplexNum. The complex number this will be multiplied by.
  */
  public multiply(cNum:ComplexNum) {
    var newReal = (this.real * cNum.getReal()) - (this.imaginary * cNum.getImaginary());
    var newImag = (this.real * cNum.getImaginary()) + (this.imaginary * cNum.getReal());
    this.setValues(newReal, newImag);
  }

  /**
    Multiply this complex number by a constant.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
    @arg const Type: number. The constant to multiply this complex number by.
  */
  public multiplyByConst(constant:number) {
    this.setValues(this.real * constant, this.imaginary * constant);
  }

  /**
    Divide this complex number by another complex number.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
    @arg cNum Type: ComplexNum. The complex number this will be divided by.
  */
  public divide(cNum:ComplexNum) {
    var divisor = Math.pow(cNum.getReal(), 2) + Math.pow(cNum.getImaginary(), 2);
    var newReal = ((this.real * cNum.getReal()) + (this.imaginary * cNum.getImaginary())) / divisor;
    var newImag = ((this.imaginary * cNum.getReal()) - (this.real * cNum.getImaginary())) / divisor;
    this.setValues(newReal, newImag);
  }

  /**
    Add this complex number to another complex number.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
    @arg cNum Type: ComplexNum. The complex number to be added to this.
  */
  public add(cNum:ComplexNum) {
    var newReal = this.real + cNum.getReal();
    var newImag = this.imaginary + cNum.getImaginary();
    this.setValues(newReal, newImag);
  }

  /**
    Subtact another complex number from this complex number.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
    @arg cNum Type: ComplexNum. The complex number to be subracted from this.
  */
  public subtract(cNum:ComplexNum) {
    var newReal = this.real - cNum.getReal();
    var newImag = this.imaginary - cNum.getImaginary();
    this.setValues(newReal, newImag);
  }

  /**
    Take the square root of this number.
    @WARNING: This function WILL OVERWRITE THE CURRENT VALUE of this object with
    the result of the computation.
  */
  public sqrt() {
    var realNum = this.real + Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    var real = realNum / Math.sqrt(2 * realNum);
    var imag = this.imaginary / Math.sqrt(2 * realNum);
    this.setValues(real, imag);
  }

}

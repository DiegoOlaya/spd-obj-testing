export class NumGenerator {
  public randNums:number[];

  public NumGenerator(range:number) {
    this.generateNums(range);
  }

  private generateNums(range:number) {
    this.randNums = [];
    for (var i = 0; i < 20; i++) {
      randNums.push(Math.random() * range);
    }
  }
}

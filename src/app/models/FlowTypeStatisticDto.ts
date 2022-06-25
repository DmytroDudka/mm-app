export class FlowTypeStatisticDto {

  flowType: string;
  sum: number;

  constructor(flowType: string, sum: number) {
    this.flowType = flowType;
    this.sum = sum;
  }

}

import {FlowTypeStatisticDto} from "./FlowTypeStatisticDto";
import {CategoryStatisticDto} from "./CategoryStatisticDto";

export class StatisticsDto {

  flowTypeStatistics : FlowTypeStatisticDto[];
  categoryStatistics : CategoryStatisticDto[];

  constructor(flowTypeStatistics: FlowTypeStatisticDto[], categoryStatistics: CategoryStatisticDto[]) {
    this.flowTypeStatistics = flowTypeStatistics;
    this.categoryStatistics = categoryStatistics;
  }

}

import {Component, OnInit} from '@angular/core';
import {StatisticsDto} from "../models/StatisticsDto";
import {FlowTypeStatisticDto} from "../models/FlowTypeStatisticDto";
import {CategoryStatisticDto} from "../models/CategoryStatisticDto";
import axios from "axios";
import {RecordsService} from "../shared/records.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(private recordService: RecordsService) {
  }


  allStatistic: StatisticsDto = new StatisticsDto([], []);
  incomeStatistic: StatisticsDto = new StatisticsDto([], []);
  consumptionStatistic: StatisticsDto = new StatisticsDto([], []);

  incomeFlowTypeSum: number = 0;
  consumptionFlowTypeSum: number = 0;
  incomeCategorySum: number = 0;
  consumptionCategorySum: number = 0;

  capIncome: number = 0;
  capConsumption: number = 0;


  ngOnInit(): void {
    this.refresh();
    this.refresh();
    console.log("Initialization");
  }

  truncate(num: number) {
    return Math.trunc(num);
  }

  public async refresh() {
    console.log("Refreshing")
    const res = await axios.get('http://localhost:9000/statistic').then(response => {
      this.allStatistic = response.data;
    });

    this.prepareStatisticData();
    this.cleanStatistics();
    this.calculateCapSum();
    console.log("Done!");
  }

  cleanStatistics() {
    console.log("Cleaning");

    let incomeCategoryStatisticDtos: CategoryStatisticDto[] = [];
    this.allStatistic.categoryStatistics.forEach(e => {
      if (e.sum > 0) {
        incomeCategoryStatisticDtos[incomeCategoryStatisticDtos.length] = e;
      }
    });
    this.incomeStatistic.categoryStatistics = incomeCategoryStatisticDtos;

    let consumptionCategoryStatisticDtos: CategoryStatisticDto[] = [];
    this.allStatistic.categoryStatistics.forEach(e => {
      if (e.sum < 0) {
        consumptionCategoryStatisticDtos[consumptionCategoryStatisticDtos.length] = e;
      }
    });
    this.consumptionStatistic.categoryStatistics = consumptionCategoryStatisticDtos;

    let incomeFlowTypeStatisticDtos: FlowTypeStatisticDto[] = [];
    this.allStatistic.flowTypeStatistics.forEach(e => {
      if (e.sum > 0) {
        incomeFlowTypeStatisticDtos[incomeFlowTypeStatisticDtos.length] = e;
      }
    })
    this.incomeStatistic.flowTypeStatistics = incomeFlowTypeStatisticDtos;

    let consumptionFlowTypeStatisticDtos: FlowTypeStatisticDto[] = [];
    this.allStatistic.flowTypeStatistics.forEach(e => {
      if (e.sum < 0) {
        consumptionFlowTypeStatisticDtos[consumptionFlowTypeStatisticDtos.length] = e;
      }
    })
    this.consumptionStatistic.flowTypeStatistics = consumptionFlowTypeStatisticDtos;

  }

  prepareStatisticData() {
    console.log("Preparing statistic data ...");

    let sum = 0;
    this.incomeStatistic.flowTypeStatistics.forEach(e => sum += e.sum);
    this.incomeFlowTypeSum = sum;
    sum = 0;
    this.incomeStatistic.categoryStatistics.forEach(e => sum += e.sum);
    this.incomeCategorySum = sum;

    sum = 0;
    this.consumptionStatistic.categoryStatistics.forEach(e => sum += e.sum);
    this.consumptionCategorySum = sum * -1;
    sum = 0;
    this.consumptionStatistic.flowTypeStatistics.forEach(e => sum += e.sum);
    this.consumptionFlowTypeSum = sum * -1;
  }

  calculateCapSum() {

    let consumption: number = 0;
    let income: number = 0;

    this.allStatistic.categoryStatistics.forEach(e => {
      if (e.sum > 0) {
        console.log(e.sum)
        income += e.sum;
      } else {
        console.log(e.sum)
        consumption+=e.sum;
      }
    })

    this.capIncome = income;
    this.capConsumption = consumption;
  }

}

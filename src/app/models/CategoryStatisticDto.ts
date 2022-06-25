export class CategoryStatisticDto {
  category: string;
  sum: number;

  constructor(category: string, sum: number) {
    this.category = category;
    this.sum = sum;
  }
}

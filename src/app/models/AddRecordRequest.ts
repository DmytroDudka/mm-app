export class AddRecordRequest {
  private name: string;
  private description: string;
  private category: string;
  private type: string;
  private amount: number;

  constructor(name: string, description: string, category: string, type: string, amount: number) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.type = type;
    this.amount = amount;
  }

}

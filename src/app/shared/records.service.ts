import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Record} from "../models/record";

@Injectable({providedIn: 'root'})
export class RecordsService {

  constructor(private http: HttpClient) {
  }

  public records: Record[] = [];

  fetchRecords() {
    return this.http.get<Record[]>("http://localhost:9000/record").pipe(tap(
      records => {
        console.log(records)
        this.records = records;
      }
    ))
  }

  onToggle(id: number) {
    const idx = this.records.findIndex(t => t.id === id);
    this.records[idx].completed = !this.records[idx].completed;
    console.log(id);
  }

  removeTransaction(id: number) {
    this.records = this.records.filter(t => t.id !== id)
  }

}

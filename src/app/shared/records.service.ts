import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Record} from "../models/Record";
import {AddRecordRequest} from "../models/AddRecordRequest";

@Injectable({providedIn: 'root'})
export class RecordsService {

  constructor(private http: HttpClient) {
  }

  public records: Record[] = [];

  fetchRecords() {
    let observable = this.http.get<Record[]>("http://localhost:9000/record")
      .pipe(tap(
      records => {
        console.log(records);
        this.records = records;
      }
    ));
    return observable;
  }

  onToggle(id: number) {
    const idx = this.records.findIndex(t => t.id === id);
    this.records[idx].completed = !this.records[idx].completed;
    console.log(id);
  }

  removeRecord(id: number) : void {
    console.log("Deleting element with id :" + id);
    this.http.delete(`http://localhost:9000/record/${id}`).pipe()
      .subscribe(() => console.log("Record deleted"));
    this.records = this.records.filter(t => t.id !== id)
  }

  createRecord(request : AddRecordRequest) : void {
    this.http.post("http://localhost:9000/record", request).pipe().subscribe(()=>{
      console.log("REQUEST EXECUTED")
    });
  }

}

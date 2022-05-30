import {Component, OnInit} from '@angular/core';
import {RecordsService} from "../shared/records.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading: boolean = true;

  constructor(public todoService: RecordsService) {
  }

  ngOnInit(): void {
    this.todoService.fetchRecords().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number){
    this.todoService.removeTransaction(id);
  }

}

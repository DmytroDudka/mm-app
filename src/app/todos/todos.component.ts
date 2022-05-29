import {Component, OnInit} from '@angular/core';
import {RecordsService} from "../shared/records.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

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

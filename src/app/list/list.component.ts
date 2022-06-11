import {Component, OnInit} from '@angular/core';
import {RecordsService} from "../shared/records.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading: boolean = true;
  public showHide: boolean = true;

  constructor(public recordsService: RecordsService) {
  }

  ngOnInit(): void {
    this.recordsService.fetchRecords().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.recordsService.onToggle(id);
  }

  removeTodo(id: number){
    this.recordsService.removeRecod(id);
  }

}

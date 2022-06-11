import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {RecordsService} from "../shared/records.service";
import {AddRecordRequest} from "../models/addRecordRequest";

@Component({
  selector: 'app-addform',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {


  constructor(public recordsService: RecordsService) {
  }

  nameControl: FormControl = new FormControl();
  descriptionControl: FormControl = new FormControl();
  categoryControl: FormControl = new FormControl();
  typeControl: FormControl = new FormControl();
  amountControl: FormControl = new FormControl();

  ngOnInit(): void {
  }

  public onSubmit() {

    let request = new AddRecordRequest(
      this.nameControl.value,
      this.descriptionControl.value,
      this.categoryControl.value,
      this.typeControl.value,
      this.amountControl.value
    );

    this.recordsService.createRecord(request);
    location.reload();
  }


}

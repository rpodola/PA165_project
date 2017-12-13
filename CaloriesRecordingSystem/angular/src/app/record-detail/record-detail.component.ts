import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordService} from '../../services/record.service';
import {RecordDetail} from '../_classes/RecordDetail';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  record: RecordDetail;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
  ) { }

  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recordService
      .getRecorDetail(id)
      .subscribe(record => {
        this.record = record;
      });
  }

}

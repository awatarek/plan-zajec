import { Component, Input, OnInit } from '@angular/core';
import { LessonData } from 'src/app/core/model/lessonData.model';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  @Input()
  public events: LessonData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

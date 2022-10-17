import { Component, Input, OnInit } from '@angular/core';
import { LessonData } from 'src/app/core/model/lessonData.model';
import { LessonType } from 'src/app/core/model/lessonType.model';

@Component({
  selector: 'app-time-table-cell',
  templateUrl: './time-table-cell.component.html',
  styleUrls: ['./time-table-cell.component.scss']
})
export class TimeTableCellComponent implements OnInit {
  @Input()
  public event: LessonData;
  
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.event) this.show = true;
  }

  public getClass(){
    return this.event.type == LessonType.wyklad ? "wyklad" : "lab";
  }

}

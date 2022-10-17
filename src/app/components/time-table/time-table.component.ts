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
  public possibleHours: any[] = [];
  public posibleDate: any[] = [];
  public choosenWeek: number = 1;

  constructor() { }

  ngOnInit(): void {
    let startDay = new Date("2022-10-03");
    let endDay = new Date();

    let time = endDay.getTime() - startDay.getTime();
    let diff = Math.floor(time / 24 / 60 / 60 / 1000 / 7);
    this.choosenWeek = diff + 1;

    this.possibleHours =[
      {start: "8:00", end: "8:45", index: 1},
      {start: "8:50", end: "9:35", index: 2},
      {start: "9:45", end: "10:30", index: 3},
      {start: "10:35", end: "11:20", index: 4},
      {start: "11:45", end: "12:30", index: 5},
      {start: "12:35", end: "13:20", index: 6},
      {start: "13:30", end: "14:15", index: 7},
      {start: "14:20", end: "15:05", index: 8},
      {start: "15:15", end: "16:00", index: 9},
      {start: "16:15", end: "17:00", index: 10},
    ]

    this.posibleDate = [0,1,2,3,4];
  }

  public getEvent(dateNumber, hoursNumber){
    let items = this.events.filter(eve => eve.when.find(eve2 => eve2 == this.choosenWeek));
    let items2 = items.filter(eve => eve.day==dateNumber);
    let items3 = items2.find(eve => eve.start == hoursNumber);
 
    if(items3){
      return items3;
    } else {
      for(let item of items2){
        let hours = item.start;
        if(hoursNumber > hours && hours+item.length > hoursNumber) return item
      }
    }
    return null;
  }

}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DayType } from './core/model/dayType.model';
import { LessonData } from './core/model/lessonData.model';
import { LessonType } from './core/model/lessonType.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'plan-zajec';
  public lessons:any[] = [];
  public lessonsData: LessonData[] = [];



  ngOnInit(){
    this.setLessons();
  }

  public setLessons(){
    this.lessons = [
      {name: "OU", type: LessonType.cwiczenia, where: 213, when: "2,4-14", day: DayType.Poniedzialek, length: 3, start: 2},
      {name: "PF", type: LessonType.cwiczenia, where: 105, when: "1,4-14", day: DayType.Poniedzialek, length: 2, start: 5},

      {name: "PF", type: LessonType.wyklad, where: 209, when: "1,5,9,11", day: DayType.Wtorek, length: 1, start: 1},
      {name: "PF", type: LessonType.wyklad, where: 209, when: "1,5,9,11", day: DayType.Wtorek, length: 1, start: 2},
      {name: "WF", type: LessonType.cwiczenia, where: 112, when: "2,4,6,8,10,12,14", day: DayType.Wtorek, length: 2, start: 2},
      {name: "PP", type: LessonType.wyklad, where: 209, when: "1,3,5,7,9,11,13", day: DayType.Wtorek, length: 1, start: 3},
      {name: "PP", type: LessonType.wyklad, where: 209, when: "1,3,5,7,9,11,13", day: DayType.Wtorek, length: 1, start: 4},
      {name: "MAD", type: LessonType.wyklad, where: 209, when: "1,2,3,5,7,9,11,13", day: DayType.Wtorek, length: 2, start: 5},
      {name: "MAD", type: LessonType.cwiczenia, where: 209, when: "1,3,7,9,11,13", day: DayType.Wtorek, length: 2, start: 7 },

      {name: "ALG", type: LessonType.wyklad, where: 209, when: "1,2,4", day: DayType.Sroda, length: 1, start: 1 },
      {name: "ALG", type: LessonType.wyklad, where: 209, when: "1,2,4,6-14", day: DayType.Sroda, length: 1, start: 2 },
      {name: "ALG", type: LessonType.cwiczenia, where: 209, when: "1,2,4,6-14", day: DayType.Sroda, length: 2, start: 3 },
      {name: "ANG", type: LessonType.lektorat, where: 115, when: "2,4-14", day: DayType.Sroda, length: 2, start: 6 },

      {name: "SOP", type: LessonType.wyklad, where: 209, when: "1,5,9,11", day: DayType.Piatek, length: 2, start: 2},
      {name: "SOP", type: LessonType.cwiczenia, where: 209, when: "2,4-14", day: DayType.Piatek, length: 2, start: 4},
      {name: "PP", type: LessonType.cwiczenia, where: 213, when: "4,6,7,8,10,12", day: DayType.Piatek, length: 2, start: 2},
      {name: "PP", type: LessonType.cwiczenia, where: 213, when: "2,5,9,11", day: DayType.Piatek, length: 2, start: 6},
      {name: "His", type: LessonType.wyklad, where: 105, when: "2,5,9,11", day: DayType.Piatek, length: 2, start: 8 },
    ];

    for(let item of this.lessons){
      let whenData: number[] = [];
      let whenString = item.when.split(",");
      for(let w of whenString){
        if(isNaN(w)){
          let whenW = w.split("-");
          for(let i = parseInt(whenW[0]); i<(parseInt(whenW[1])+1) ;i++){
            whenData.push(i);
          }
        } else {
          whenData.push(parseInt(w));
        }
      }

      this.lessonsData.push(
        {...item, when: whenData}
      )
    }
  }
}




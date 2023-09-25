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
      {name: "Algorytmy danych", type: LessonType.cwiczenia, where: 109, when: "2-12,14", day: DayType.Poniedzialek, length: 2, start: 1},
      {name: "Elektrotechnika", type: LessonType.cwiczenia, where: 9, when: "2-12,14", day: DayType.Poniedzialek, length: 2, start: 3},
      {name: "Języki paradygmaty", type: LessonType.cwiczenia, where: 212, when: "2-12,14", day: DayType.Poniedzialek, length: 2, start: 5},
      {name: "Podstawy elektroniki", type: LessonType.wyklad, where: 209, when: "2,4,6,8,10,12,14", day: DayType.Poniedzialek, length: 2, start: 7},
      {name: "ANG", type: LessonType.lektorat, where: 209, when: "2,4,5,8,10,12,14", day: DayType.Poniedzialek, length: 1, start: 9},
      {name: "Podstawy elektroniki", type: LessonType.wyklad, where: 209, when: "4", day: DayType.Poniedzialek, length: 1, start: 9},
      {name: "ANG", type: LessonType.lektorat, where: 115, when: "1,2,3,5,7,9,11,12,14", day: DayType.Poniedzialek, length: 1, start: 10},
      {name: "ANG", type: LessonType.lektorat, where: 115, when: "1,3,5,7,11,14", day: DayType.Poniedzialek, length: 1, start: 11},

      {name: "Sieciowe", type: LessonType.wyklad, where: 207, when: "2,5,9,14", day: DayType.Wtorek, length: 2, start: 1},
      {name: "Sieciowe", type: LessonType.cwiczenia, where: 207, when: "1,3-8,10-13", day: DayType.Wtorek, length: 2, start: 1},
      {name: "WF", type: LessonType.cwiczenia, where: 112, when: "2-13", day: DayType.Wtorek, length: 1, start: 4},
      {name: "Sieciowe", type: LessonType.cwiczenia, where: 111, when: "2", day: DayType.Wtorek, length: 2, start: 5},

      {name: "Technika cyfrowa", type: LessonType.wyklad, where: 207, when: "2,4,5,8,10,12,14", day: DayType.Sroda, length: 2, start: 2},
      {name: "Technika cyfrowa", type: LessonType.wyklad, where: 207, when: "4", day: DayType.Sroda, length: 1, start: 4},
      {name: "Algorytmy danych", type: LessonType.wyklad, where: 207, when: "1-3,5,6,9,11,13", day: DayType.Sroda, length: 1, start: 4},

      {name: "Języki paradygmaty", type: LessonType.wyklad, where: 207, when: "3", day: DayType.Piatek, length: 1, start: 6},
      {name: "Języki paradygmaty", type: LessonType.wyklad, where: 207, when: "1,3,5,7,9,11,13", day: DayType.Piatek, length: 1, start: 7},
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




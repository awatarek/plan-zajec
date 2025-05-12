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

  /*
  12
  8
  17
  6
  21
  12
  15
  7
  19
  8
  17
  6
  19
  3

  */
  public setLessons(){

    this.lessons = [
      {name: "Programowanie komponentowe i rozproszon", type: LessonType.wyklad, where: 210, when: "1-14", day: DayType.Poniedzialek, length: 1, start: 10},
      {name: "Programowanie komponentowe i rozproszon", type: LessonType.wyklad, where: 210, when: "1", day: DayType.Poniedzialek, length: 1, start: 11},
      {name: "Programowanie komponentowe i rozproszon", type: LessonType.cwiczenia, where: 210, when: "2-13", day: DayType.Poniedzialek, length: 1, start: 11},

      {name: "Sieci neuronowe", type: LessonType.cwiczenia, where: 0, when: "2-12", day: DayType.Poniedzialek, length: 2, start: 13},
      /**/

      {name: "Systemy wbudowane", type: LessonType.wyklad, where: 207, when: "1,3,5,7,9,11,13", day: DayType.Wtorek, length: 1, start: 1},
      {name: "Systemy wbudowane", type: LessonType.wyklad, where: 207, when: "1,3,5,6,7,9,11,13", day: DayType.Wtorek, length: 1, start: 2},

      {name: "Systemy wbudowane", type: LessonType.cwiczenia, where: 108, when: "2,4,6,10,12,14", day: DayType.Wtorek, length: 2, start: 5},

      {name: "Grafika komputerowa i wizualizacja", type: LessonType.wyklad, where: 107, when: "1,3,5,7,8,9,11,13", day: DayType.Wtorek, length: 1, start: 5},
      {name: "Grafika komputerowa i wizualizacja", type: LessonType.wyklad, where: 107, when: "1,3,5,7,9,11,13", day: DayType.Wtorek, length: 1, start: 6},

      {name: "Grafika komputerowa i wizualizacja", type: LessonType.cwiczenia, where: 216, when: "1,3,5,9,11,13", day: DayType.Wtorek, length: 2, start: 7},
      
      /**/ 
      {name: "Seminarium dyplomowe", type: LessonType.cwiczenia, where: 207, when: "5,7,9,11,13", day: DayType.Sroda, length: 2, start: 1},

      {name: "Badania Operacyjne", type: LessonType.wyklad, where: 207, when: "2,3,5,7,9,11,13", day: DayType.Sroda, length: 1, start: 3},

      {name: "Badania Operacyjne", type: LessonType.wyklad, where: 207, when: "2", day: DayType.Sroda, length: 1, start: 4},
      {name: "Badania Operacyjne", type: LessonType.cwiczenia, where: 207, when: "3,5,7,9,11,13", day: DayType.Sroda, length: 1, start: 4},

      {name: "Badania Operacyjne", type: LessonType.cwiczenia, where: 207, when: "3,5,7,9,11,13", day: DayType.Sroda, length: 1, start: 5},


      /**/ 
      {name: "Projekt indywidualny", type: LessonType.cwiczenia, where: 108, when: "1,5,6", day: DayType.Piatek, length: 2, start: 2},
      {name: "Projekt indywidualny", type: LessonType.cwiczenia, where: 108, when: "1,3,5-7,9,11,13", day: DayType.Piatek, length: 2, start: 4},

      {name: "Podstawy przedsiębiorczości", type: LessonType.wyklad, where: 116, when: "4,7,11,12", day: DayType.Piatek, length: 2, start: 6},
      {name: "Elementy sztucznej inteligencji", type: LessonType.wyklad, where: 108, when: "2,3,5,6,8,10,13", day: DayType.Piatek, length: 2, start: 6},
      {name: "Projekt indywidualny", type: LessonType.cwiczenia, where: 108, when: "9", day: DayType.Piatek, length: 2, start: 6},

      {name: "Elementy sztucznej inteligencji", type: LessonType.cwiczenia, where: 210, when: "3,5,8,9,10,13", day: DayType.Piatek, length: 1, start: 8},
      {name: "Elementy sztucznej inteligencji", type: LessonType.wyklad, where: 116, when: "6", day: DayType.Piatek, length: 1, start: 8},

      {name: "Elementy sztucznej inteligencji", type: LessonType.cwiczenia, where: 210, when: "3,5,8-10,13", day: DayType.Piatek, length: 1, start: 9},

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




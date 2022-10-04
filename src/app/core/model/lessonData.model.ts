import { DayType } from "./dayType.model";
import { LessonType } from "./lessonType.model";

export class LessonData{
    name: string;
    type: LessonType;
    where: number;
    when: number[];
    day: DayType;
    length: number;
    start: number;
  }
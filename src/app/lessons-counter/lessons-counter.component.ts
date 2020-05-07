import { Lesson } from './../shared/model/lesson';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON, Observer } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements Observer {
  lessonCounter: number = 0;

  constructor() {
    console.log('lesson list component is registered as observer...');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonCounter += 1
    });
  }

  notify(data: Lesson[]): void {
    console.log('counter component received data..');
    this.lessonCounter = data.length;
  }

}

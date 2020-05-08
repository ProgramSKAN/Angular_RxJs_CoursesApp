import { Lesson } from './../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    //placed in the constructor, since we need to register observer before broadcasting>disadvantage
    console.log('lessons list component is registerd as observer..')
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        })
      }
    });
  }

  ngOnInit(): void {

  }

  notify(data: Lesson[]) {
    console.log('lessons list component received data');
    this.lessons = data;
  }
  toggleLessonViewed(lesson: Lesson) {
    console.log('toggling lesson ...');
    lesson.completed = !lesson.completed;
  }
  delete(deleted: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === deleted.id);
  }
}

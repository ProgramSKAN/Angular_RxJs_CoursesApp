import { Lesson } from './../shared/model/lesson';
import { globalEventBus, Observer } from './../event-bus-experiments/event-bus';
import { Component, OnInit } from '@angular/core';


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
    globalEventBus.registerObserver('LESSONS_LIST_AVAILABLE', this);
  }

  ngOnInit(): void {

  }

  notify(data: Lesson[]) {
    console.log('lessons list component received data');
    this.lessons = data;
  }

}

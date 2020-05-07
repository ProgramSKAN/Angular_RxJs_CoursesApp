import { testLessons } from './../shared/model/test-lessons';
import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Top level component broadcasted all lessons...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));//broadcast lessons list to any observers that need to receive this data//slice is for copy
  }

  addLesson(lessonText: string) {
    console.log('Add new lesson');
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.scss']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.hoverSection = document.getElementById('hover');
    // this.hoverSection.addEventListener('mousemove', ev => {
    //   console.log(ev);
    // });

    this.hoverSection.addEventListener('mousemove', OnMouseMove);
  }

  unsubscribe() {
    console.log("called unsubscribe");
    this.hoverSection.removeEventListener('mousemove', OnMouseMove);
  }

}

function OnMouseMove(ev: MouseEvent) {
  console.log(ev);
}

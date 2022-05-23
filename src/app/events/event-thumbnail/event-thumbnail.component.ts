import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  @Output() eventClick = new EventEmitter();

  property: string = 'Test passage de valeur';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []
  }

  getStartTimeStyle() : any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight':'bold'}
    return {}
  }
}

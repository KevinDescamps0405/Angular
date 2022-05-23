import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';

// @ts-ignore
declare let toastr;

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {


  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }


  handleEventClicked($event: any): void {
    console.log('click event', $event);
    toastr.success($event);
  }
}

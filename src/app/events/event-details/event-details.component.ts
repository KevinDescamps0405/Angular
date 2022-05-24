import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  private event: any;

  constructor( private eventService : EventService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }

}

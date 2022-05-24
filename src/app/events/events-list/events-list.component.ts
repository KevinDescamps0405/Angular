import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ToastrService} from '../../common/toastr.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private toastService: ToastrService, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }


  handleEventClicked(eventName: string): void {
    this.toastService.success(eventName);
  }
}

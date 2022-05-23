import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '23/05/2022',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '54 rue des tulipes',
      city: 'Montpellier',
      country: 'France'
    }
  };
  constructor() {
  }

  ngOnInit(): void {
  }




}

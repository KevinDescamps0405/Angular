import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventsListComponent} from './events/events-list/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar/navbar.component';
import {EventService} from './events/shared/event.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

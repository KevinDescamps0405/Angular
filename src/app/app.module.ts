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
import {Error404Component} from './errors/error404/error404.component';
import {ToastrService} from './common/toastr.service';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';

export function checkDirtyState( component: CreateEventComponent) {
  if(component.isDirty){
    return window.confirm("You have not saved this event, do you really want to cancel?")
  }
  return true
}

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService, {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

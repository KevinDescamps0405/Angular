import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/error404/error404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

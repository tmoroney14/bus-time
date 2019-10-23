import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusStopComponent } from './bus-stop/bus-stop.component';
import { StopListComponent } from './stop-list/stop-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/stops', pathMatch: 'full' },
  { path: 'stops', component: StopListComponent },
  { path: 'stops/:stopId', component: BusStopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
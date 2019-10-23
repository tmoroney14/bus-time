import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule,
        MatRippleModule,
        MatToolbarModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MatProgressSpinnerModule, MatButtonModule, MatCardModule, MatRippleModule, MatToolbarModule, ],
  declarations: [ AppComponent, BusStopComponent, StopListComponent, ToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

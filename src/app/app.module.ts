import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import {MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatProgressSpinnerModule, MatButtonModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, BusStopComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

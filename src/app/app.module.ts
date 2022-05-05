import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NextDirective , PrevDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

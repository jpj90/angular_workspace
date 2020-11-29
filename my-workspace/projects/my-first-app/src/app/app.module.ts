import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyLibModule } from 'my-lib';
import { RegularComponentComponent } from './components/regular-component/regular-component.component'

@NgModule({
  declarations: [
    AppComponent,
    RegularComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

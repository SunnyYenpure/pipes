import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { summarypipe } from './shared/pipe/summary.pipe';
import { summarypipe2 } from './shared/pipe/summarypipe2';
// import { summarypipe2 } from './shared/pipe/summarypipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    summarypipe,
    summarypipe2
    // summarypipe2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

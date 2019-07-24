import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpProfileComponent } from './mp-profile/mp-profile.component';
import { MpmashComponent } from './mpmash/mpmash.component';
import { MpmashScoreboardComponent } from './mpmash-scoreboard/mpmash-scoreboard.component';
import { BrexitPositionScoreboardComponent } from './brexit-position-scoreboard/brexit-position-scoreboard.component';
import { MpExpensesScoreboardComponent } from './mp-expenses-scoreboard/mp-expenses-scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MpProfileComponent,
    MpmashComponent,
    MpmashScoreboardComponent,
    BrexitPositionScoreboardComponent,
    MpExpensesScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule
} from '@angular/material';
import { AppwordsComponent } from './appwords/appwords.component';
import { AppplaycardComponent } from './appplaycard/appplaycard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsettingsComponent,
    AppwordsComponent,
    AppplaycardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

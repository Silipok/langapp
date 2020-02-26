import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule, MatToolbarModule
} from '@angular/material';
import { AppwordsComponent } from './appwords/appwords.component';
import { AppplaycardComponent } from './appplaycard/appplaycard.component';
import {RoutingModule} from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

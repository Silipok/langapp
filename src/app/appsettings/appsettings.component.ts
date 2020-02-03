import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../app.component';


@Component({
  selector: 'app-appsettings',
  templateUrl: './appsettings.component.html',
  styleUrls: ['./appsettings.component.css']
})
export class AppsettingsComponent implements OnInit {
  @Input() language: Language[];
  wordsCnt = 10;
  time = 5;

  constructor() {
  }

  ngOnInit() {
  }

}

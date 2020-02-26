import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../app.component';
import {SettingsService} from '../services/settings.service';


@Component({
  selector: 'app-appsettings',
  templateUrl: './appsettings.component.html',
  styleUrls: ['./appsettings.component.css']
})
export class AppsettingsComponent implements OnInit {
  language: Language[];
  wordsCnt = 10;
  time = 5;

  constructor(private settings: SettingsService) {
  }

  ngOnInit() {
    this.language = this.settings.getLang();
  }
  plusTime() {
    if (this.time < 10) {
      this.time++;
      this.settings.setTime(this.time);
    }
  }
  minusTime() {
    if (this.time > 1) {
      this.time--;
      this.settings.setTime(this.time);
    }
  }
  setWordCnt(e) {
    this.wordsCnt = Number(e.target.value);
    this.settings.setCntWords(this.wordsCnt);
  }
  changeTime(e) {
    this.time = Number(e.value);
    this.settings.setTime(this.time);
  }
  changeLang(e) {
    this.settings.setLang(e.value);
  }
}

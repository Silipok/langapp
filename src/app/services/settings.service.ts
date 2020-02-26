import { Injectable } from '@angular/core';
import {Language} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private supportlangs: Language[];
  private selectLang: Language;
  private selectTime: number;
  private selectWordsCount: number;

  constructor() {
    this.supportlangs = [
      {value: 'en', viewValue: 'English'},
      {value: 'ru', viewValue: 'Russian'}
    ];
    if (!this.selectLang) { this.setLang(this.supportlangs[0]); }
  }
  getLang() {
    return this.supportlangs;
  }
  setLang(lang: Language) {
    this.selectLang = lang;
  }
  setTime(time) {
    this.selectTime = time;
  }
  setCntWords(cnt) {
    this.selectWordsCount = cnt;
  }
  getSelectLang() {
    return this.selectLang.value;
  }
  getWordCnt() {
    return this.selectWordsCount;
  }
}

import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
public vocabular: [string?];
  constructor() {
  }

  public addWord(lang, word) {
    this.initVocab(lang);
    this.vocabular.push(word);
    localStorage.setItem(lang, JSON.stringify(this.vocabular));
    console.log('i pushing word', word);
  }
  getRandomWord(lang: string) {
    this.vocabular = JSON.parse(localStorage.getItem(lang));
    const index = Math.floor(Math.random() * this.vocabular.length);
    return this.vocabular[index];
  }
  public initVocab(lang: string) {
    if (JSON.parse(localStorage.getItem(lang))) {
      this.vocabular = JSON.parse(localStorage.getItem(lang));
    } else {
      this.vocabular = [];
    }
  }
}

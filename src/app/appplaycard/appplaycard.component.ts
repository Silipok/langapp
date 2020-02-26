import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../services/translate.service';
import {VocabularyService} from '../services/vocabulary.service';
import {SettingsService} from '../services/settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appplaycard',
  templateUrl: './appplaycard.component.html',
  styleUrls: ['./appplaycard.component.css']
})
export class AppplaycardComponent implements OnInit {
  translateWord: string[];
  randomWord: string;
  playerWord = '';
  lang: string;
  visibleTranslate = false;
  constructor(private translater: TranslateService,
              private vocabulary: VocabularyService,
              private settings: SettingsService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.lang = this.settings.getSelectLang();
    this.translateWord = [];
    this.vocabulary.initVocab(this.lang);
    console.log('vocab=', this.vocabulary, 'lang=', this.lang);
    if (this.vocabulary.vocabular) {
      this.randomWord = this.vocabulary.getRandomWord(this.lang);
    } else {
      this.randomWord = 'hello';
    }
    this.doTranslate();
  }
  doTranslate() {
    this.translater.getTranslate(this.randomWord, this.lang).
    subscribe((data: any) => {
        data.def.forEach(objword => objword.tr.forEach(tr => this.translateWord.push(tr.text)));
        // console.log(data, this.translateWord);
      },
      (error) => {this.translateWord.push('Sorry we have some trouble');
                  console.log(error);
    });
  }
  checkResult() {
    this.doTranslate();
    const answer = this.translateWord.includes(this.playerWord);
    alert(answer);
    if (answer) {
      this.nextWord();
    }
  }
  showTranslate() {
    this.visibleTranslate = true;
  }
  nextWord() {
    this.visibleTranslate = false;
    if (this.vocabulary.vocabular.length < this.settings.getWordCnt()) {
      this.randomWord = this.vocabulary.getRandomWord(this.lang);
    } else {
      alert('Vocabulary have less word!Add more');
      this.router.navigate(['/word']);
    }
  }
}

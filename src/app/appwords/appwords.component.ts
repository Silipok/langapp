import {Component, OnInit} from '@angular/core';
import {VocabularyService} from '../services/vocabulary.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-appwords',
  templateUrl: './appwords.component.html',
  styleUrls: ['./appwords.component.css']
})
export class AppwordsComponent implements OnInit {

  constructor(public vocabulary: VocabularyService) {
  }

  private langs = ['en', 'ru'];
  private words = '';
  private wordForm = new FormGroup({
    word: new FormControl(''),
    lang: new FormControl('en')
  });

  ngOnInit() {
  }
  private wordCommit() {
    console.log(this.wordForm.get('word').value, this.wordForm.get('lang'));
    if (this.wordForm.get('word').value) {
      this.vocabulary.addWord(this.wordForm.get('lang').value, this.wordForm.get('word').value);
    }
}
}




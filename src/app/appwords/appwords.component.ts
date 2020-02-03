import {Component, OnInit} from '@angular/core';

export interface Words {
  en: string;
  ru: string;
}

@Component({
  selector: 'app-appwords',
  templateUrl: './appwords.component.html',
  styleUrls: ['./appwords.component.css']
})
export class AppwordsComponent implements OnInit {
  words: Words[] = [
    {en: 'go', ru: 'идти'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  getTranslate(word: string , lang: string) {
    lang === 'ru' ? lang = 'ru-en' : lang = 'en-ru';
    const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?
key=dict.1.1.20200217T070545Z.9f03fe3a63b2c365.43e2fd38884f0536d2413a7caef3d7bc11910e85&
lang=${lang}&
text=${word}`;
    return this.http.get(url, {});
  }
}

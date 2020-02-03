import {Component} from '@angular/core';

export interface MenuItem {
  value: string;
  name: string;
}

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  activeEl = 'settings';
  language: Language[] = [
    {value: 'en', viewValue: 'english'}
  ];
  menuItems: MenuItem[] = [
    {value: 'settings', name: 'Settings'},
    {value: 'play', name: 'Play'},
    {value: 'words', name: 'Add word'},
  ];
  setActiveEl(e) {
    console.log(e);
    this.activeEl = e.target.value;
  }
}

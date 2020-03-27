import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeLanguage,
  selectSettingsLanguage,
  SettingsState
} from '../core/store/settings';


@Component({
  selector: 'be-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public pushRightClass: string;

  collapedSideBar: boolean = false;
  language$: Observable<string>;
  languages = ['en', 'vi'];

  constructor(
    private store: Store<SettingsState>
  ) { }

  ngOnInit(): void {
    this.pushRightClass = 'push-right';

    // Get from selector
    this.language$ = this.store.pipe(select(selectSettingsLanguage))
  }

  onChangeLanguage(selectedLanguage: any) {
    this.store.dispatch(changeLanguage({ language: selectedLanguage }));
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
}

import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { changeLanguage } from './settings.action';
import { selectSettingsLanguage, selectSettingsState } from './settings.selector';
import { SettingsState } from './settings.reducer';

const SETTING_KEY = 'SETTINGS';

@Injectable()
export class SettingsEffect {
  constructor(
    private actions$: Actions,
    private store: Store<SettingsState>,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
  ) { }

  setLanguage = createEffect(
    () =>
      this.store.pipe(
        select(selectSettingsLanguage),
        distinctUntilChanged(),
        tap(language => this.translateService.use(language))
      ),
    { dispatch: false }
  );

  saveSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          changeLanguage
        ),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([action, settings]) =>
          this.localStorageService.setItem(SETTING_KEY, settings)
        )
      ),
    { dispatch: false }
  );
}

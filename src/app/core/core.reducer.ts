import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterStateUrl } from './store/router';
import { SettingsState, settingsReducer } from './store/settings';
import { initStateFromLocalStorage } from './store/meta/init-state-from-local-storage.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  settings: SettingsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  settings: settingsReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
];

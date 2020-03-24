import { createReducer, Action, on } from '@ngrx/store';
import { changeLanguage } from './settings.action';

export interface SettingsState {
  language: string;
}

export const initialState: SettingsState = {
  language: 'en'
};

const reducer = createReducer(
  initialState,
  on(
    changeLanguage,
    (state, action) => ({ ...state, ...action })
  ),
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return reducer(state, action);
}
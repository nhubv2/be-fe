import { RouterEffect } from './store/router';
import { SettingsEffect } from './store/settings';

export const appEffects: any[] = [
  RouterEffect,
  SettingsEffect
];

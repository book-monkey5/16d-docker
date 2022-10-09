import { InjectionToken } from '@angular/core';

export interface Settings {
  apiUrl: string;
}

export const API_URL = new InjectionToken<string>('apiUrl');

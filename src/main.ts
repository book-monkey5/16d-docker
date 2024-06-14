import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { API_URL, Settings } from './app/shared/settings';

async function loadSettings(): Promise<Settings> {
  const response = await fetch('settings.json');
  return response.json();
}

loadSettings().then(settings => {
  platformBrowserDynamic([
    { provide: API_URL, useValue: settings.apiUrl }
  ])
    .bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true
    })
    .catch(err => console.error(err));
});

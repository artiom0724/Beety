import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CompatibilityService } from './app/services/compatibility.service';

if (environment.production) {
  enableProdMode();
}

if (!CompatibilityService.isLocalStorageAccessible()) {
  alert('Local storage is inaccessible! Application needs local storage access to work.' +
    'May be you are using a private mode. Please, use non-private mode');
} else {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './app.routes';

const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

export default appConfig;

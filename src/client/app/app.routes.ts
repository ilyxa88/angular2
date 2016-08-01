import { provideRouter, RouterConfig } from '@angular/router';
import {MainRoutes} from './main/index';
import {DetailRoutes} from './detail/index';
//import { AboutRoutes } from './+about/index';
//import { HomeRoutes } from './+home/index';

const routes: RouterConfig = [
  ...MainRoutes,
  ...DetailRoutes
  //...HomeRoutes,
 // ...AboutRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];


import Aurelia from 'aurelia';

// Our router configuration import to register the Router with Aurelia's DI
import { RouterConfiguration } from '@aurelia/router';

import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
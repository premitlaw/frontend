import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,APP_INITIALIZER} from '@angular/core';

import { AppComponent } from './app.component';
import {ConfigService} from './config.service'


export function configServiceFactory(confServ: ConfigService) {
  return function () {
    return confServ.loadEnvConfig();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

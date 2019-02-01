import { BrowserModule } from '@angular/platform-browser';

import { NgModule ,APP_INITIALIZER} from '@angular/core';

import { AppComponent } from './app.component';
import {ConfigService} from './config.service'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';

export function configServiceFactory(confServ: ConfigService) {
  return function () {
    return confServ.loadEnvConfig();
  };
}
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
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

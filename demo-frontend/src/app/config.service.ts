import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';


const envUri = '/env-config';

@Injectable()
export class ConfigService {

  config: ReplaySubject<any> = new ReplaySubject<any>(1);

  loadEnvConfig(): Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', location.origin + envUri);
      xhr.onload = function () {
        if (xhr.status === 200) {
          self.config.next(JSON.parse(xhr.responseText));
          resolve();
        } else {
                    reject({msg:"No config found"});
        }
      };
      xhr.send();
    });

  }
}



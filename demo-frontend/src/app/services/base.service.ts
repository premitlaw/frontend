import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { ConfigService } from './config.service';

@Injectable()
export class BaseService {

  protected baseUrl;
  private options = {withCredentials: true, Accept: 'application/json', 'Content-Type': 'application/json'};

  constructor(protected http: HttpClient,protected configSrv: ConfigService) {
    configSrv.config.subscribe((conf: any) => {
      this.baseUrl = `${conf.apiHost}/demo/customer/`;
    });
    this.baseUrl = "https://capgeminidemo.herokuapp.com/demo/customer/"
  }

  getTemplate(urlSuffix): Observable<any> {
    return this.http.get<any>(this.baseUrl + urlSuffix, this.options)
      
  }

  postTemplate(urlSuffix, payload): Observable<any> {
    return this.http.post<any>(this.baseUrl + urlSuffix, payload, this.options)
      
  }

  putTemplate(urlSuffix, payload): Observable<any> {
    return this.http.put<any>(this.baseUrl + urlSuffix, payload, this.options)
      
  }

  deleteTemplate(urlSuffix): Observable<any> {
    return this.http.delete<any>(this.baseUrl + urlSuffix, this.options)
     

  }

}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(protected http: HttpClient,protected configSrv: ConfigService) { 
    super(http, configSrv);
  }

  getUsers(): Observable<User[]>{ 
      return this.getTemplate("all")
  }

  deleteUser(user : User) : Observable<User>{
      return this.deleteTemplate(user.id);
  }

  addUser(user : User) : Observable<User> {
      return this.postTemplate("", user);
}

}

import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs/internal/Observable';
import { defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private mockUsers : User[] = [
    new User(1, "John", "code1"),
    new User(2, "John12", "code2"),
    new User(3, "Jo3h3n12", "code3"),
    new User(4, "Jo3hn12", "code4"),
    new User(5, "Jo3h4n12", "code5"),
    new User(6, "Joh3n12", "code6"),
    new User(7, "Jo3h4n12", "code7"),
    new User(8, "Joh12n", "code8"),
    new User(9, "Jo3h4ne12", "code9"),
  ]

  private counter = 10;

  constructor() { }

  getUsers(): Observable<User[]>{ 
      return defer(()=>Promise.resolve(this.mockUsers))  
  }

  deleteUser(user : User){
      this.mockUsers = this.mockUsers.filter(v=>v.customer_id!==user.customer_id)
  }

  addUser(name : string, code: string){
    this.mockUsers.push(new User(this.counter++, name, code))
}

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$ : Observable<User[]>
  name : string
  code : string

  constructor(public userService : UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers()
  }

  onUserDelete(user :User){
    this.userService.deleteUser(user);
    this.users$ = this.userService.getUsers()
  }

  onSubmit(){
    this.userService.addUser(this.name, this.code)
    this.users$ = this.userService.getUsers()
  }

}

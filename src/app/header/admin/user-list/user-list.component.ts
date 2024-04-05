import { Component, Inject } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(@Inject(USER_TOKEN) private userService:UserService){}

  userList:User[]=this.userService.GetAllUsers()



  showUserDetails(user:User){
    this.userService.OnShowUserDetails(user)
  }


}

import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent  implements OnInit{
   selectedUser?:User


   userService=inject(USER_TOKEN)


   ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data:User)=>{
      this.selectedUser=data
      console.log(this.selectedUser);

    })

   }

}

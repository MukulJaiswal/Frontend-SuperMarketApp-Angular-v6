import { Component, OnInit } from '@angular/core';
import{User}  from '../../user';
import{Router}  from '@angular/router';
import{UserService}  from '../../shared_service/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private user:User;

  constructor(private _userService:UserService,private _rotuer:Router) { }

  ngOnInit() {
   this.user=this._userService.getter();
   //this._userService.getter();
  }

  processForm(){
    if(this.user.id==undefined){
       this._userService.addItem(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._userService.saveOrUpdateItem(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}

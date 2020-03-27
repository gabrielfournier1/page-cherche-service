import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from "../models/user.models"
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit, OnDestroy {

  users :  User [];
  userSubcription : Subscription;


  constructor( private userService: UserService) { }

  ngOnInit()  {
    this.userSubcription=this.userService.userSubject.subscribe(
      (users: User[])=> {
        this.users=users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }
}

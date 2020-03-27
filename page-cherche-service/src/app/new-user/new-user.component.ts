import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.iniForm();
  }

  iniForm(){
    this.userForm=this.formBuilder.group({
      firstName: " ",
      lastName:" ",
      email: " ",
      lieu:" ",
      pourquoi: " ",
      tel: " "
    });
  }

}

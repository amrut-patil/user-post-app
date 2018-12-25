import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  enableAdd: boolean = true;
  currentClasses = {};
  showUserForm: boolean = true;

  constructor() {

  }

  ngOnInit() {
    this.users = [
      {
        firstName: "firstname1",
        lastName: "lastname1",
        email: "",
        image: "http://www.lorempixel.com/600/600/people/2",
        isActive: true,
        hide: true
      },
      {
        firstName: "firstname2",
        lastName: "lastname2",
        email: "",
        image: "http://www.lorempixel.com/600/600/people/8",
        isActive: false,
        hide: true
      },
      {
        firstName: "firstname3",
        lastName: "lastname3",
        email: "",
        image: "http://www.lorempixel.com/600/600/people/1",
        isActive: true,
        hide: true
      }
    ]

    //this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

  addUser(e) {
    this.users.push({ firstName: 'new user fn', lastName: 'new user ln', email: "", isActive: true });
  }

  toggleHide(user: User) {
    user.hide = !user.hide
  }

  onSubmit(e) {
    console.log('submit form ....');

    e.preventDefault();
  }

}

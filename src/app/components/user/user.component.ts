import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-user',
    //template: '<h2>Amar Patil</h2>'
    templateUrl: './user.component.html',
    //styles: [`h2 {color: blue}`],
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit {

    user: User;

    constructor() {
    }

    ngOnInit(): void {
        this.user = {
            firstName: "Amar",
            lastName: "Patil",
            email: "",
        }

    }

}


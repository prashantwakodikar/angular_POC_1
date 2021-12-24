import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }
  
  public usersObj:any = [];
  public flag:boolean = true;

  ngOnInit(): void {

    this.usersObj = [
      {
        "name":"Mahesh",
        "age": 25
      },
      {
        "name":"Shakti",
        "age": 23
      },
      {
        "name":"krishna",
        "age": 23
      },
      {
        "name":"Radha",
        "age": 21
      }
    ]
  }

}

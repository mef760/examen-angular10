import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserListPageService } from './user-list-page.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  users: User[];
  title: string;

  constructor(private userListService: UserListPageService) {
    this.title = 'User List';
   }

  ngOnInit(): void {
    this.userListService.getUsers().subscribe(res =>{
      this.users = res;
    })
  }

}

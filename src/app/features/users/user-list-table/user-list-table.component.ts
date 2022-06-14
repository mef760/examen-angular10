import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css']
})
export class UserListTableComponent {
  @Input() users:User[]

  constructor() { }

}

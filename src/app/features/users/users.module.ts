import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListTableComponent } from './user-list-table/user-list-table.component';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UserListTableComponent
    ],
    exports: [
        UserListTableComponent
    ]
})
export class UsersModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { UsersModule } from 'src/app/features/users/users.module';
import { UserListPageComponent } from './user-list-page.component';
import { UserListPageRoutingModule } from './user-list-page.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        UserListPageRoutingModule,
        UsersModule
    ],
    declarations: [
        UserListPageComponent
    ],
    exports: [
    ]
})
export class UserListPageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { BaseService } from 'src/app/core/services/base.service';
import { UsersModule } from 'src/app/features/users/users.module';
import { AlbumListPageComponent } from './album-list-page.component';
import { AlbumListPageRoutingModule } from './album-list-page.routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        AlbumListPageRoutingModule,
        UsersModule
    ],
    declarations: [
        AlbumListPageComponent
    ],
    exports: [
    ]
})
export class AlbumListPageModule { }

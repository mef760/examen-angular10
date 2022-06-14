import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommentsModule } from 'src/app/features/comments/commnets.module';
import { PostListPageComponent } from './post-list-page.component';
import { PostListPageRoutingModule } from './post-list-page.routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        PostListPageRoutingModule,
        CommentsModule
    ],
    declarations: [
        PostListPageComponent
    ],
    exports: [
    ]
})
export class PostListPageModule { }

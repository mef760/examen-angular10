import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentListComponent } from './comments-list/comment-list.component';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CommentListComponent
    ],
    exports: [
        CommentListComponent
    ]
})
export class CommentsModule { }

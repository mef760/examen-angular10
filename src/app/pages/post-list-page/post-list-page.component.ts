import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/interfaces/post';
import { PostListPageService } from './post-list-page.service';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
  title: string;
  fg: FormGroup;
  posts: Post[];
  comments: Comment[];

  constructor(
    private fb: FormBuilder,
    private postListPageService: PostListPageService) { 
    this.title = 'Posts';
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.fg = this.fb.group({
      userId: ['', [Validators.required, Validators.min(1)]],
    });
  }

  get userId() {
    return this.fg.controls["userId"].value;
  }

  searchPosts(){
    this.postListPageService.getPosts(this.userId).subscribe(res=>{
      this.posts = res;
      console.log(this.posts);
    });
  }

  viewComments(postId:number){
    this.postListPageService.getComments(postId).subscribe(res=>{
      this.comments = res;
      this.title = `Comments Post ${postId}`;
    });
  }

  backToPosts(){
    this.comments = [];
    this.title = 'Posts';
  }
}

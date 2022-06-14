import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/core/interfaces/album';
import { AlbumListPageService } from './album-list-page.service';

@Component({
  selector: 'app-album-list-page',
  templateUrl: './album-list-page.component.html',
  styleUrls: ['./album-list-page.component.css']
})
export class AlbumListPageComponent implements OnInit {
  title: string;
  fg: FormGroup;
  albums: Album[];

  constructor(
    private fb: FormBuilder,
    private albumListPageService: AlbumListPageService) { 
    this.title = 'Albums';
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

  searchAlbums(){
    this.albumListPageService.getAlbums(this.userId).subscribe(res=>{
      this.albums = res;
      console.log(this.albums);
    });
  }
}

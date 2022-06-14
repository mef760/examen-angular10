import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'userlist',
    loadChildren: () => import('./pages/user-list-page/user-list-page.module').then((m) => m.UserListPageModule),
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/album-list-page/album-list-page.module').then((m) => m.AlbumListPageModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/post-list-page/post-list-page.module').then((m) => m.PostListPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

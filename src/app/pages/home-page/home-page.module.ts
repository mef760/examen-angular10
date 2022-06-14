import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomePageRoutingModule
    ],
    declarations: [
        HomePageComponent
    ],
    exports: []
})
export class HomePageModule { }

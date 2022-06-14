import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        AppTopbarComponent,
        AppFooterComponent
    ],
    exports: [
        AppTopbarComponent
    ]
})
export class SharedModule { }

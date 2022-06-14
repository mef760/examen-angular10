import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
    declarations: [
        TruncatePipe
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule, 
        HttpClientModule
    ],
    exports: [
        CommonModule, 
        ReactiveFormsModule, 
        RouterModule, 
        HttpClientModule,
        TruncatePipe
    ],
})
export class CoreModule {}
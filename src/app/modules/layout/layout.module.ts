import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


const COMPONENTS = [
    LayoutComponent,
    HeaderComponent
]

@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
    ],
    exports: [],
    declarations: [...COMPONENTS],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
})
export class LayoutModule { }

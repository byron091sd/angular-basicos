import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LazyImageComponent } from './Components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  exports:[
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

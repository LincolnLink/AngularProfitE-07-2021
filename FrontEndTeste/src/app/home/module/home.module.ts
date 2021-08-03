import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from '../home.component';
import { SlideShowComponent } from 'src/app/home/slide-show/slide-show.component';


@NgModule({
  declarations: [ HomeComponent, SlideShowComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

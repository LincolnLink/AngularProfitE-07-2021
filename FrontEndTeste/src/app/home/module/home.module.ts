import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeComponent } from '../home.component';
import { SlideShowComponent } from 'src/app/home/slide-show/slide-show.component';


@NgModule({
  declarations: [ HomeComponent, SlideShowComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2CarouselamosModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }

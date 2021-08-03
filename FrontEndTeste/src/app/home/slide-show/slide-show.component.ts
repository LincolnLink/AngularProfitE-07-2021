import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  images : Array<any> = []

  constructor() {

    this.images  = [
      { path: '../../../assets/img/slideshow1.jpg' },
      { path: '../../../assets/img/slideshow2.jpg' },
      { path: '../../../assets/img/slideshow3.jpg' },
      { path: '../../../assets/img/slideshow1.jpg' },
      { path: '../../../assets/img/slideshow2.jpg' },
      { path: '../../../assets/img/slideshow3.jpg' },

    ]

  }

  ngOnInit(): void {
  }

}

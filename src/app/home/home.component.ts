import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  logos = [
    {
      img: 'linkedin.png',
      link: 'https://www.linkedin.com/in/anukool-rathi-a28664235',
    },
    {
      img: 'github.png',
      link: 'https://github.com/Anukool-rathi',
    },
  ];
  isClicked = false;

  clickSocial() {
    this.isClicked = !this.isClicked;
  }

  constructor() {}

  ngOnInit(): void {}
}

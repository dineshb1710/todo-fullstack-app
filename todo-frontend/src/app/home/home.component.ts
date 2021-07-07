import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isGuest = false;

  constructor() { }

  ngOnInit(): void {
    this.isGuest = sessionStorage.getItem('username') === null ? true : false;
  }

}

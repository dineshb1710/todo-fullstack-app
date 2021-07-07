import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

}

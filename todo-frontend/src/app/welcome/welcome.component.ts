import { NgModuleResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../services/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string = '';
  message: string = '';
  error: string = null;

  constructor(private dataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  getWelcomeMessage() {
    console.log(">> Get Welcome Message");
    this.dataService.executeCustomWelcomeMessage().subscribe(
      response => this.handleResponseFromService(response),
      error => this.handleErrorFromService(error)
    );
  }

  getWelcomeMessageWithParameter() {
    console.log(">> Get Welcome Message with Parameter");
    this.dataService.executeCustomWelcomeMessageWithParameter(this.username).subscribe(
      response => this.handleResponseFromService(response),
      error => this.handleErrorFromService(error)
    );
  }

  handleResponseFromService(response) {
    console.log('>> Response : '+response.message)
    this.message = response.message;
  }

  handleErrorFromService(error) {
    this.error = error.message;  
  }

}

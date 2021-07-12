import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorldBean } from '../model/hello-world-bean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeCustomWelcomeMessage() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeCustomWelcomeMessageWithParameter(user: string) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world-path/${user}`)
  }
}

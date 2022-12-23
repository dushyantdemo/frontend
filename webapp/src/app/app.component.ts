import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  sendCmd = '';

  login(data: string) {
    console.log("From app component -> "+data);
    this.sendCmd = data;
  }
}

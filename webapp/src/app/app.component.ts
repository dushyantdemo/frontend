import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.router.navigate(['']);
  }

  sendCmd = '';

  constructor(private router: Router) {}

  login(data: string) {
    console.log("From app component -> "+data);
    this.sendCmd = data;
  }
}

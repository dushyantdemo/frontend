import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  headerText = "Test Application"
  @Output() sendData = new EventEmitter<string>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('profile', sanitizer.bypassSecurityTrustResourceUrl('../assets/profile.svg'));
  }

  ngOnInit(): void {
  }

  loginPage(): void {
    console.log("Login page called");
    this.sendData.emit("login");
  }

}

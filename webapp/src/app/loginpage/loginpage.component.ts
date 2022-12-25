import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.sass']
})
export class LoginpageComponent {

  cmd: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    var obj =  router.getCurrentNavigation()?.extras.state;
    if (obj != undefined) {
      this.cmd = obj['cmd'];
    }
  }
}

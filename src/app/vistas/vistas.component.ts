import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  data: any;

    constructor(public social: SocialService) {}
    ngOnInit() {
      this.data = this.social.authService['_user'];
      console.log(this.data);
    }
}

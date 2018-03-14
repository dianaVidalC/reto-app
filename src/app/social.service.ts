import { Injectable, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

export interface User {
  authToken: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  name: string;
  photoUrl: string;
  provider: string;
}

@Injectable()
export class SocialService implements OnInit {
  user;
  constructor(public authService: AuthService) { }
  ngOnInit() {
      this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
    signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
    this.authService.signOut();
    }
}

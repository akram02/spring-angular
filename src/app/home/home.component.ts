import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {LoginModalService} from '../core/login/login-modal.service';
import {AccountService} from '../core/auth/account.service';
import {Account} from '../core/user/account.model';
import {faFacebookSquare, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  facebook = faFacebookSquare;
  twitter = faTwitterSquare;
  instagram = faInstagram;
  authSubscription?: Subscription;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {
  }

  ngOnInit() {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}

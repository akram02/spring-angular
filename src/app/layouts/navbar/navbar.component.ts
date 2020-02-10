import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AccountService} from '../../core/auth/account.service';
import {LoginModalService} from '../../core/login/login-modal.service';
import {LoginService} from '../../core/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sidenavbar: any;
  isNavbarCollapsed = true;
  name?: string;

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.accountService.identity().subscribe(account => {
      if (account) {
        this.name = account.name;
      }
    });
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  getName(): string {
    return this.accountService.getName();
  }

  login(): void {
    this.loginModalService.open();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  getImageUrl(): string {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
  }
}

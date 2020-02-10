import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRouteSnapshot, NavigationEnd, NavigationError} from '@angular/router';

import {AccountService} from '../../core/auth/account.service';
import {LoginService} from '../../core/login/login.service';
import {LoginModalService} from '../../core/login/login-modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private loginModalService: LoginModalService,
    private accountService: AccountService,
    private titleService: Title,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // try to log in automatically
    this.accountService.identity().subscribe();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
      if (event instanceof NavigationError && event.error.status === 404) {
        this.router.navigate(['/404']);
      }
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updateTitle() {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'Nitex';
    }
    this.titleService.setTitle(pageTitle);
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
    this.loginService.logout();
    this.router.navigate(['']);
  }

  getImageUrl(): string {
    return this.isAuthenticated() ? this.accountService.getImageUrl() : '';
  }
}

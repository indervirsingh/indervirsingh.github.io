import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private baseTitle = 'Website Refactor';

  constructor(
    private title: Title,
    private router: Router
  ) {}

  init() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeData = this.router.routerState.snapshot.root.firstChild?.data;
        const pageTitle = routeData?.['title'] || '';
        this.setTitle(pageTitle);
      });
  }

  setTitle(pageTitle: string) {
    const title = pageTitle ? `${pageTitle} | ${this.baseTitle}` : this.baseTitle;
    this.title.setTitle(title);
  }
} 
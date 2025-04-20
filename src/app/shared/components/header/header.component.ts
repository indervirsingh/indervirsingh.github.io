import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {} 
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <header>
      <!-- Header content from existing website -->
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
        <!-- Add other navigation links -->
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <!-- Footer content from existing website -->
    </footer>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {} 
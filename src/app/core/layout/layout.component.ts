import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <p>&copy; 2023 Your Company</p>
    </footer>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {} 
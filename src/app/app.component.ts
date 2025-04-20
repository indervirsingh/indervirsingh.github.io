import { Component, OnInit } from '@angular/core';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.init();
  }
} 
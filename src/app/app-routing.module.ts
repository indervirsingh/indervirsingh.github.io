import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
        data: { title: 'Home' }
      },
      { 
        path: 'about', 
        loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
        data: { title: 'About Us' }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
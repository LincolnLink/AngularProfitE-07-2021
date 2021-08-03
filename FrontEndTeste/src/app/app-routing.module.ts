import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
  scrollPositionRestoration: 'enabled',

  scrollOffset: [0, 0] // [x, y]
};

const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'home'
   },
   {
     path: 'home',
     loadChildren: () => import('./home/module/home.module').then(h => h.HomeModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

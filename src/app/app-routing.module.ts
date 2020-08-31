import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './modules/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

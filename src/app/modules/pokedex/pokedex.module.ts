import { NgModule } from '@angular/core';

import { PokedexComponent } from './pokedex.component';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex.routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [CommonModule, PokedexRoutingModule, SharedComponentsModule],
  exports: [],
  declarations: [PokedexComponent],
  providers: [],
})
export class PokedexModule {}

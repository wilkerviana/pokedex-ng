import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';
import { CommonModule } from '@angular/common';
import { TextsModule } from '../texts/texts.module';
import { BadgesModule } from '../badges/badges.module';

@NgModule({
  imports: [CommonModule, TextsModule, BadgesModule],
  exports: [CardsComponent],
  declarations: [CardsComponent],
})
export class CardsModule {}

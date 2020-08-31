import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from './buttons/buttons.module';
import { BadgesModule } from './badges/badges.module';
import { CardsModule } from './cards/cards.module';
import { TextsModule } from './texts/texts.module';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonsModule, BadgesModule, TextsModule, CardsModule],
  declarations: [],
})
export class SharedComponentsModule {}

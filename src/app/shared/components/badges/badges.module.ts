import { NgModule } from '@angular/core';

import { BadgesComponent } from './badges.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [BadgesComponent],
  declarations: [BadgesComponent],
})
export class BadgesModule {}

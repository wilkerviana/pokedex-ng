import { NgModule } from '@angular/core';

import { TextsComponent } from './texts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [TextsComponent],
  declarations: [TextsComponent],
})
export class TextsModule {}

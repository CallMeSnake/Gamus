import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FooterComponent } from './comtonents/footer/footer.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}

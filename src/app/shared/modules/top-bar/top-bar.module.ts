import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}

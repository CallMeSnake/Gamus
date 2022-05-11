import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}

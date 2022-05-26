import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule.forChild(routes)],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}

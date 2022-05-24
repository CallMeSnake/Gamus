import { Component } from '@angular/core';
import { MatAccordionDisplayMode } from '@angular/material/expansion';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  mode: MatAccordionDisplayMode = 'default';

  homePage = environment.homePage;
}

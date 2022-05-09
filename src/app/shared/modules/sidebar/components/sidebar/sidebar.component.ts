import { Component } from '@angular/core';
import { MatAccordionDisplayMode } from '@angular/material/expansion';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  mode: MatAccordionDisplayMode = 'default';
}

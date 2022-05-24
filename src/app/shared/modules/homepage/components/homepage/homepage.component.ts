import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  homePage = environment.homePage;
}

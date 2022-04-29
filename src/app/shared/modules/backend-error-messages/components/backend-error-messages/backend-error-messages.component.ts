import { Component, Input } from '@angular/core';

import { BackendError } from '../../../../types/backend-error.interface';

@Component({
  selector: 'gamus-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent {
  @Input('backendErrors') set backendErrors(backendErrors: BackendError | null) {
    if (!backendErrors) {
      this.errorMessages = [];
      return;
    }
    this.errorMessages = Object.keys(backendErrors).map(() => `${backendErrors.message}`);
  }

  errorMessages: string[] = [];
}

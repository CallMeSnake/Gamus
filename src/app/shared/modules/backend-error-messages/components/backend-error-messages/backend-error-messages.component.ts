import { Component, Input } from '@angular/core';

import { BackendError } from '../../../../types/backend-error.interface';

@Component({
  selector: 'gamus-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent {
  @Input('backendError') set backendError(backendError: BackendError | null | undefined) {
    if (!backendError) {
      this.errorMessages = [];
      return;
    }
    this.errorMessages = Object.keys(backendError).map(() => `${backendError.message}`);
  }

  errorMessages: string[] = [];
}

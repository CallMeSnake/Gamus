import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'gamus-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrors;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps.message;
      return `${messages}`;
    });
  }
}

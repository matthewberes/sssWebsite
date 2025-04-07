import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

import { environment } from '../../environments/environment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-content-form',
  imports: [MatRadioModule, FormsModule, RecaptchaModule, RecaptchaFormsModule, NgIf],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  templateUrl: './main-content-form.component.html',
  styleUrl: './main-content-form.component.css'
})
export class MainContentFormComponent {

  token: string | undefined;

  constructor() {
    this.token = undefined;
  }

}

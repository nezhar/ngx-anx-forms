import { Component } from '@angular/core';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
})
export class ErrorMessagesComponent {

  serviceProvide = `...
NgxAnxFormsModule.forRoot({
    errorMessageService: {
        provide: ErrorMessageService,
        useClass: FormErrorMessageService,
    }
}),
...`;

  serviceCode = `import { Injectable } from '@angular/core';
import { ErrorMessageService } from 'ngx-anx-forms';

@Injectable()
export class FormErrorMessageService implements ErrorMessageService {
    handle(type: string): string {
        switch (type) {
            case 'required': {
                return 'This field is required';
            }

            case 'email': {
                return 'Please insert a valid email';
            }

            case 'min': {
                return 'Please insert a higher value';
            }

            case 'max': {
                return 'Please insert a lower value';
            }

            default: {
                return 'Unknown error: ' + type;
            }
        }
    }
}
`;

  serviceCodeTranslated = `import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorMessageService } from 'ngx-anx-forms';

@Injectable()
export class FormErrorMessageService implements ErrorMessageService {

    constructor(private translateService: TranslateService) {
    }

    handle(type: string): string {
        switch (type) {
            case 'required': {
                return this.translateService.instant('VALIDATORS.REQUIRED');
            }

            case 'email': {
                return this.translateService.instant('VALIDATORS.EMAIL');
            }

            case 'min': {
                return this.translateService.instant('VALIDATORS.MIN');
            }

            case 'max': {
                return this.translateService.instant('VALIDATORS.MAX');
            }

            default: {
                console.log('Unknown error: ' + type);
            }
        }
    }
}
`;

}

import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { InputComponent } from './components/simple/input/input.component';
import { InputCheckboxComponent } from './components/simple/input-checkbox/input-checkbox.component';
import { InputErrorComponent } from './components/simple/input-error/input-error.component';
import { InputTextareaComponent } from './components/simple/input-textarea/input-textarea.component';
import { InputRadioComponent } from './components/simple/input-radio/input-radio.component';
import { DefaultErrorMessageService, ErrorMessageService } from './services/error-message.service';

import {
    InputDistributedMultipleChoiceComponent
} from './components/composed/input-distributed-multiple-choice/input-distributed-multiple-choice.component';
import { InputSelectComponent } from './components/composed/input-select/input-select.component';
import { IconInputComponent } from './components/composed/icon-input/icon-input.component';
import { InputLikertScaleComponent } from './components/composed/input-likert-scale/input-likert-scale.component';
import { InputSelectCheckboxComponent } from './components/composed/input-select-checkbox/input-select-checkbox.component';
import { InputSelectRadioComponent } from './components/composed/input-select-radio/input-select-radio.component';


export interface NgxAnxFormsConfig {
  errorMessageService?: Provider;
}


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
    ],
    exports: [
        InputErrorComponent,
        InputComponent,
        InputCheckboxComponent,
        InputTextareaComponent,
        InputRadioComponent,
        IconInputComponent,
        InputSelectComponent,
        InputLikertScaleComponent,
        InputDistributedMultipleChoiceComponent,
        InputSelectCheckboxComponent,
        InputSelectRadioComponent,
    ],
    declarations: [
        InputErrorComponent,
        InputComponent,
        InputCheckboxComponent,
        InputTextareaComponent,
        InputRadioComponent,
        IconInputComponent,
        InputSelectComponent,
        InputLikertScaleComponent,
        InputDistributedMultipleChoiceComponent,
        InputSelectCheckboxComponent,
        InputSelectRadioComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgxAnxFormsModule {
    static forRoot(config: NgxAnxFormsConfig = {}): ModuleWithProviders<NgxAnxFormsModule> {
        return {
            ngModule: NgxAnxFormsModule,
            providers: [
                config.errorMessageService || {provide: ErrorMessageService, useClass: DefaultErrorMessageService},
            ]
        };
    }
}

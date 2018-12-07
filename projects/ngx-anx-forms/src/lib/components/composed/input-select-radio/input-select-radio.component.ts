import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs';
import { InputComponent } from '../../simple/input/input.component';


@Component({
    selector: 'anx-forms-input-select-radio',
    templateUrl: './input-select-radio.component.html',
    styleUrls: ['./input-select-radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputSelectRadioComponent),
            multi: true,
        },
    ],
})
export class InputSelectRadioComponent extends InputComponent implements OnInit, OnDestroy {
    @Input() options: {}[];
    @Input() bindLabel: string;
    @Input() bindValue: string;

    inputForm: FormControl = new FormControl(null);
    inputFormSubscription: Subscription;

    ngOnInit(): void {
        super.ngOnInit();
        // Subscribe to form changes to update ngModel
        this.inputFormSubscription = this.inputForm.valueChanges.subscribe(value => {
            this.triggerOnChange(value);
        });
    }

    writeValue(value: any): void {
        // Add initial value to reactive form after load
        if (!this.value) {
            this.inputForm.setValue(value);
        }
        super.writeValue(value);
    }

    displayErrors() {
        return this.inputForm.touched;
    }

    getElementControl(): AbstractControl {
        return this.inputForm;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputFormSubscription.unsubscribe();
    }
}

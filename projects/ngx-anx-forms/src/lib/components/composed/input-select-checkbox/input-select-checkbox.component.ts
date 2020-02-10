import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subscription } from 'rxjs';
import { InputComponent } from '../../simple/input/input.component';


@Component({
    selector: 'anx-forms-input-select-checkbox',
    templateUrl: './input-select-checkbox.component.html',
    styleUrls: ['./input-select-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputSelectCheckboxComponent),
            multi: true,
        },
    ],
})
export class InputSelectCheckboxComponent extends InputComponent implements  OnInit, OnDestroy {

    value: number[];
    inputForm: FormGroup = new FormGroup({});
    inputFormSubscription: Subscription = null;

    @Input() options: {}[];
    @Input() bindLabel: string;
    @Input() bindValue: string;

    ngOnInit(): void {
        super.ngOnInit();

        const options = new FormArray([]);
        for (const option of this.options) {
            options.push(
                new FormGroup({
                    value: new FormControl(option[this.bindValue]),
                    selected: new FormControl(false)
                })
            );
        }
        this.inputForm.addControl('options', options);

        // Subscribe to form changes to update ngModel
        this.inputFormSubscription = this.inputForm.valueChanges.subscribe(value => {
            this.triggerOnChange(value.options.filter(option => option.selected).map(option => option.value));
        });
    }

    writeValue(value: any): void {
        // Add initial value to reactive form after load
        if (!this.value) {
            const options = this.inputForm.get('options') as FormArray;
            for (const option of options.controls) {
                if (value.indexOf(option.get('value').value) !== -1) {
                    option.get('selected').setValue(true);
                }
            }
        }
        super.writeValue(value);
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.inputFormSubscription.unsubscribe();
    }

    displayErrors() {
        return this.inputForm.touched;
    }

    getElementControl(): AbstractControl {
        return this.inputForm;
    }
}

import { Component, Input, forwardRef, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel, ValidationErrors } from '@angular/forms';

import { SERVER_ERROR_KEY } from '../input-error/input-error.component';
import { NgModelValueAccessor } from '../../utils/ng-model-value-accessor';


@Component({
    selector: 'anx-forms-input',
    templateUrl: './input.component.html',
    styleUrls: [
        './input.component.scss'
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ]
})
export class InputComponent extends NgModelValueAccessor implements OnInit, OnDestroy {
    @Input() public id: string = '';
    @Input() public name: string = '';
    @Input() public title: string = '';
    @Input() public type: string = 'text';
    @Input() public placeholder: string = '';
    @Input() public readonly: boolean = false;
    @Input() public floatingPlaceholder: boolean = false;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public step: number;
    @Input() public errorMessages: Object = {};
    @Input() public errors: ValidationErrors;

    @ViewChild('inputField') inputField: NgModel;

    observer: MutationObserver;
    differ: any;

    constructor(protected elRef: ElementRef) {
        super();
    }

    ngOnInit() {
        this.subscribeOnTouchPorpagation();
    }

    ngOnDestroy() {
        this.unsubscribeOnTouchPorpagation()
    }

    displayErrors(): boolean {
        return !!this.errors && (this.inputField.touched || this.errors[SERVER_ERROR_KEY]);
    }

    subscribeOnTouchPorpagation() {
        const observer = new MutationObserver(() => {
            if (this.elRef.nativeElement.classList.contains('ng-touched')) {
                this.inputField.control.markAsTouched();
            }
            if (this.elRef.nativeElement.classList.contains('ng-untouched')) {
                this.inputField.control.markAsUntouched();
            }
            if (this.elRef.nativeElement.classList.contains('ng-dirty')) {
                this.inputField.control.markAsDirty();
            }
            if (this.elRef.nativeElement.classList.contains('ng-pristine')) {
                this.inputField.control.markAsPristine();
            }
        });

        observer.observe(this.elRef.nativeElement, {
            attributes: true,
            attributeFilter: ['class'] 
        });
    }

    unsubscribeOnTouchPorpagation() {
        this.observer.disconnect();
    }
}

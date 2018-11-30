import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputSelectRadioComponent } from './input-select-radio.component';

describe('FormsInputSelectRadioComponent', () => {
  let component: FormsInputSelectRadioComponent;
  let fixture: ComponentFixture<FormsInputSelectRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInputSelectRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputSelectRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

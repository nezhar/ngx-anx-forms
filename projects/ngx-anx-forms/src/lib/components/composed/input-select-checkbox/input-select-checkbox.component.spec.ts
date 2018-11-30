import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputSelectCheckboxComponent } from './input-select-checkbox.component';

describe('FormsInputSelectCheckboxComponent', () => {
  let component: FormsInputSelectCheckboxComponent;
  let fixture: ComponentFixture<FormsInputSelectCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInputSelectCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputSelectCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

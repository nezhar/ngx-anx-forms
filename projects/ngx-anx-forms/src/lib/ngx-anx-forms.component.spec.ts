import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnxFormsComponent } from './ngx-anx-forms.component';

describe('NgxAnxFormsComponent', () => {
  let component: NgxAnxFormsComponent;
  let fixture: ComponentFixture<NgxAnxFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAnxFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

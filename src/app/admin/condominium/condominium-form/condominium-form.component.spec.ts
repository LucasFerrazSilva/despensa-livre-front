import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumFormComponent } from './condominium-form.component';

describe('CondominiumFormComponent', () => {
  let component: CondominiumFormComponent;
  let fixture: ComponentFixture<CondominiumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominiumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

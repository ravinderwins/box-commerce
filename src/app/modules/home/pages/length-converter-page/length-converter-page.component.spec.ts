import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConverterPageComponent } from './length-converter-page.component';

describe('LengthConverterPageComponent', () => {
  let component: LengthConverterPageComponent;
  let fixture: ComponentFixture<LengthConverterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthConverterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

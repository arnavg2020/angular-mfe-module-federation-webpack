import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeFlightComponentComponent } from './mfe-flight-component.component';

describe('MfeFlightComponentComponent', () => {
  let component: MfeFlightComponentComponent;
  let fixture: ComponentFixture<MfeFlightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeFlightComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeFlightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

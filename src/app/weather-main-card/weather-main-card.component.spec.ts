import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainCardComponent } from './weather-main-card.component';

describe('WeatherMainCardComponent', () => {
  let component: WeatherMainCardComponent;
  let fixture: ComponentFixture<WeatherMainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMainCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

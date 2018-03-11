import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleGraficoComponent } from './circle-grafico.component';

describe('CircleGraficoComponent', () => {
  let component: CircleGraficoComponent;
  let fixture: ComponentFixture<CircleGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

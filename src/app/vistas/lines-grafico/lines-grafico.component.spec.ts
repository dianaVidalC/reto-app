import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesGraficoComponent } from './lines-grafico.component';

describe('LinesGraficoComponent', () => {
  let component: LinesGraficoComponent;
  let fixture: ComponentFixture<LinesGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

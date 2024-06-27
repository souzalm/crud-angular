import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotacoesComponent } from './lotacoes.component';

describe('LotacoesComponent', () => {
  let component: LotacoesComponent;
  let fixture: ComponentFixture<LotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

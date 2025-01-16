import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhiaComponent } from './campanhia.component';

describe('CampanhiaComponent', () => {
  let component: CampanhiaComponent;
  let fixture: ComponentFixture<CampanhiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampanhiaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampanhiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

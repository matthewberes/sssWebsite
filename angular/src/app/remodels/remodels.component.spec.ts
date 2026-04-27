import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemodelsComponent } from './remodels.component';

describe('RemodelsComponent', () => {
  let component: RemodelsComponent;
  let fixture: ComponentFixture<RemodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemodelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

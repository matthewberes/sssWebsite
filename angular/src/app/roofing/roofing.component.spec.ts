import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofingComponent } from './roofing.component';

describe('RoofingComponent', () => {
  let component: RoofingComponent;
  let fixture: ComponentFixture<RoofingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoofingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

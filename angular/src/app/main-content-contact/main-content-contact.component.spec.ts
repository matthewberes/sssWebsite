import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentContactComponent } from './main-content-contact.component';

describe('MainContentContactComponent', () => {
  let component: MainContentContactComponent;
  let fixture: ComponentFixture<MainContentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentHomeComponent } from './main-content-home.component';

describe('MainContentHomeComponent', () => {
  let component: MainContentHomeComponent;
  let fixture: ComponentFixture<MainContentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

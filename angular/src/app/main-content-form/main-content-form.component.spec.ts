import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentFormComponent } from './main-content-form.component';

describe('MainContentFormComponent', () => {
  let component: MainContentFormComponent;
  let fixture: ComponentFixture<MainContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

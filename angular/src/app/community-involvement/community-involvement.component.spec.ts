import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInvolvementComponent } from './community-involvement.component';

describe('CommunityInvolvementComponent', () => {
  let component: CommunityInvolvementComponent;
  let fixture: ComponentFixture<CommunityInvolvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityInvolvementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityInvolvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

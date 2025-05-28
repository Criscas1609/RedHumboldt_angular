import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorHomeComponent } from './coordinator-home.component';

describe('CoordinatorHomeComponent', () => {
  let component: CoordinatorHomeComponent;
  let fixture: ComponentFixture<CoordinatorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

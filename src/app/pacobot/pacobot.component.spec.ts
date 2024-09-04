import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacobotComponent } from './pacobot.component';

describe('PacobotComponent', () => {
  let component: PacobotComponent;
  let fixture: ComponentFixture<PacobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacobotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

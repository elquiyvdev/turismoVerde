import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMollendoComponent } from './about-mollendo.component';

describe('AboutUsComponent', () => {
  let component: AboutMollendoComponent;
  let fixture: ComponentFixture<AboutMollendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMollendoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMollendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

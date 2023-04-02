import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstateBackComponent } from './realstate-back.component';

describe('RealstateBackComponent', () => {
  let component: RealstateBackComponent;
  let fixture: ComponentFixture<RealstateBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealstateBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealstateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

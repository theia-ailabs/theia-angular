import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeperScreenComponent } from './sleeper-screen.component';

describe('SleeperScreenComponent', () => {
  let component: SleeperScreenComponent;
  let fixture: ComponentFixture<SleeperScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleeperScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleeperScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

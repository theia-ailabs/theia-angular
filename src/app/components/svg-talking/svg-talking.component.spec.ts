import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTalkingComponent } from './svg-talking.component';

describe('SvgTalkingComponent', () => {
  let component: SvgTalkingComponent;
  let fixture: ComponentFixture<SvgTalkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgTalkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

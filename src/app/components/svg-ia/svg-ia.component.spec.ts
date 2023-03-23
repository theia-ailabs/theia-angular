import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIaComponent } from './svg-ia.component';

describe('SvgIaComponent', () => {
  let component: SvgIaComponent;
  let fixture: ComponentFixture<SvgIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgIaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

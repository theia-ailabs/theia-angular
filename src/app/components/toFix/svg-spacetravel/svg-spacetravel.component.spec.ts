import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSpacetravelComponent } from './svg-spacetravel.component';

describe('SvgSpacetravelComponent', () => {
  let component: SvgSpacetravelComponent;
  let fixture: ComponentFixture<SvgSpacetravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSpacetravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSpacetravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

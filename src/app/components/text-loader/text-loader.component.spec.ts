import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLoaderComponent } from './text-loader.component';

describe('TextLoaderComponent', () => {
  let component: TextLoaderComponent;
  let fixture: ComponentFixture<TextLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

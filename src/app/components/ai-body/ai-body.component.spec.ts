import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBodyComponent } from './ai-body.component';

describe('AiBodyComponent', () => {
  let component: AiBodyComponent;
  let fixture: ComponentFixture<AiBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

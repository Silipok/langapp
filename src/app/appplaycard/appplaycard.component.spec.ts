import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppplaycardComponent } from './appplaycard.component';

describe('AppplaycardComponent', () => {
  let component: AppplaycardComponent;
  let fixture: ComponentFixture<AppplaycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppplaycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppplaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

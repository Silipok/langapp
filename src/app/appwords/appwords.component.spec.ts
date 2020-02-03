import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppwordsComponent } from './appwords.component';

describe('AppwordsComponent', () => {
  let component: AppwordsComponent;
  let fixture: ComponentFixture<AppwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

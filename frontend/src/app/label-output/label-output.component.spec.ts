import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOutputComponent } from './label-output.component';

describe('LabelOutputComponent', () => {
  let component: LabelOutputComponent;
  let fixture: ComponentFixture<LabelOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

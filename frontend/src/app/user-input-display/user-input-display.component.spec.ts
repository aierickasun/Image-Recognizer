import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputDisplayComponent } from './user-input-display.component';

describe('UserInputDisplayComponent', () => {
  let component: UserInputDisplayComponent;
  let fixture: ComponentFixture<UserInputDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

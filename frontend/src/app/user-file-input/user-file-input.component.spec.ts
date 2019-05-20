import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFileInputComponent } from './user-file-input.component';

describe('UserFileInputComponent', () => {
  let component: UserFileInputComponent;
  let fixture: ComponentFixture<UserFileInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFileInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

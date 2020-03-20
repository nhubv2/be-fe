import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegsiterComponent } from './auth-regsiter.component';

describe('AuthRegsiterComponent', () => {
  let component: AuthRegsiterComponent;
  let fixture: ComponentFixture<AuthRegsiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRegsiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

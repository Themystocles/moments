import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMomentsComponent } from './new-moments.component';

describe('NewMomentsComponent', () => {
  let component: NewMomentsComponent;
  let fixture: ComponentFixture<NewMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

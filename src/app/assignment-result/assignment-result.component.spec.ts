import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentResultComponent } from './assignment-result.component';

describe('AssignmentResultComponent', () => {
  let component: AssignmentResultComponent;
  let fixture: ComponentFixture<AssignmentResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

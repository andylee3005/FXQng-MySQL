import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqDetailsComponent } from './fxq-details.component';

describe('FxqDetailsComponent', () => {
  let component: FxqDetailsComponent;
  let fixture: ComponentFixture<FxqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqListComponent } from './fxq-list.component';

describe('FxqListComponent', () => {
  let component: FxqListComponent;
  let fixture: ComponentFixture<FxqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

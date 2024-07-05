import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijekEditComponent } from './lijek-edit.component';

describe('LijekEditComponent', () => {
  let component: LijekEditComponent;
  let fixture: ComponentFixture<LijekEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LijekEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijekEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijekFormComponent } from './lijek-form.component';

describe('LijekFormComponent', () => {
  let component: LijekFormComponent;
  let fixture: ComponentFixture<LijekFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LijekFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijekFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijekDetailComponent } from './lijek-detail.component';

describe('LijekDetailComponent', () => {
  let component: LijekDetailComponent;
  let fixture: ComponentFixture<LijekDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LijekDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijekDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

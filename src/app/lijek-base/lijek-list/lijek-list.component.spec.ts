import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijekListComponent } from './lijek-list.component';

describe('LijekListComponent', () => {
  let component: LijekListComponent;
  let fixture: ComponentFixture<LijekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LijekListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

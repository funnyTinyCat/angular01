import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormCreateComponent } from './comment-form-create.component';

describe('CommentFormCreateComponent', () => {
  let component: CommentFormCreateComponent;
  let fixture: ComponentFixture<CommentFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentFormCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

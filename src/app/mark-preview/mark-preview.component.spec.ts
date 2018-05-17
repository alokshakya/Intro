import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPreviewComponent } from './mark-preview.component';

describe('MarkPreviewComponent', () => {
  let component: MarkPreviewComponent;
  let fixture: ComponentFixture<MarkPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

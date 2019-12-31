import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHashtagComponent } from './create-hashtag.component';

describe('CreateHashtagComponent', () => {
  let component: CreateHashtagComponent;
  let fixture: ComponentFixture<CreateHashtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHashtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

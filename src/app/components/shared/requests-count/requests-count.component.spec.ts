import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsCountComponent } from './requests-count.component';

describe('RequestsCountComponent', () => {
  let component: RequestsCountComponent;
  let fixture: ComponentFixture<RequestsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestsCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

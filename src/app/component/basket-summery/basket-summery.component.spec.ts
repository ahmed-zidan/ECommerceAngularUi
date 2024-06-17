import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSummeryComponent } from './basket-summery.component';

describe('BasketSummeryComponent', () => {
  let component: BasketSummeryComponent;
  let fixture: ComponentFixture<BasketSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketSummeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

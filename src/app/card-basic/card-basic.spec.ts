import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBasic } from './card-basic';

describe('CardBasic', () => {
  let component: CardBasic;
  let fixture: ComponentFixture<CardBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

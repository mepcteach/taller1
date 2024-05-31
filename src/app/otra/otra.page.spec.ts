import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtraPage } from './otra.page';

describe('OtraPage', () => {
  let component: OtraPage;
  let fixture: ComponentFixture<OtraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

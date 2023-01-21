import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictsComponent } from './add-districts.component';

describe('AddDistrictsComponent', () => {
  let component: AddDistrictsComponent;
  let fixture: ComponentFixture<AddDistrictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistrictsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistrictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

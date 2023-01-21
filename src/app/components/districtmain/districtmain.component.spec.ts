import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictmainComponent } from './districtmain.component';

describe('DistrictmainComponent', () => {
  let component: DistrictmainComponent;
  let fixture: ComponentFixture<DistrictmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

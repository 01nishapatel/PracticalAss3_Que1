import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispBasicComponent } from './disp-basic.component';

describe('DispBasicComponent', () => {
  let component: DispBasicComponent;
  let fixture: ComponentFixture<DispBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

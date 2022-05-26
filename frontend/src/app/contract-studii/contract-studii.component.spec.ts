import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStudiiComponent } from './contract-studii.component';

describe('ContractStudiiComponent', () => {
  let component: ContractStudiiComponent;
  let fixture: ComponentFixture<ContractStudiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStudiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractStudiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualClassComponent } from './virtual-class.component';

describe('VirtualClassComponent', () => {
  let component: VirtualClassComponent;
  let fixture: ComponentFixture<VirtualClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

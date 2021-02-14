import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutListComponent } from './prodcut-list.component';

describe('ProdcutListComponent', () => {
  let component: ProdcutListComponent;
  let fixture: ComponentFixture<ProdcutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

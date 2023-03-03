import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinicioComponent } from './binicio.component';

describe('BinicioComponent', () => {
  let component: BinicioComponent;
  let fixture: ComponentFixture<BinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

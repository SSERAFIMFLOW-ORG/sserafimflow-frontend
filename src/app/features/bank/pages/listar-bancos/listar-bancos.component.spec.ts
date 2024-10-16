import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBancosComponent } from './listar-bancos.component';

describe('ListarBancosComponent', () => {
  let component: ListarBancosComponent;
  let fixture: ComponentFixture<ListarBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarBancosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

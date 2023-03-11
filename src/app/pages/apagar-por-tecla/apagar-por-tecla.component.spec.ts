import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApagarPorTeclaComponent } from './apagar-por-tecla.component';

describe('ApagarPorTeclaComponent', () => {
  let component: ApagarPorTeclaComponent;
  let fixture: ComponentFixture<ApagarPorTeclaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApagarPorTeclaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApagarPorTeclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

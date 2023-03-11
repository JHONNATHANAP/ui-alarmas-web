import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApagarPorMatematicasComponent } from './apagar-por-matematicas.component';

describe('ApagarPorMatematicasComponent', () => {
  let component: ApagarPorMatematicasComponent;
  let fixture: ComponentFixture<ApagarPorMatematicasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApagarPorMatematicasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApagarPorMatematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

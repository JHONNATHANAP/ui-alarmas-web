import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmasSugeridasComponent } from './alarmas-sugeridas.component';

describe('AlarmasSugeridasComponent', () => {
  let component: AlarmasSugeridasComponent;
  let fixture: ComponentFixture<AlarmasSugeridasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasSugeridasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmasSugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-alarma-rapida',
  templateUrl: './alarma-rapida.component.html',
  styleUrls: ['./alarma-rapida.component.scss'],
})
export class AlarmaRapidaComponent  implements OnInit {
  teclado=[1,2,3,4,5,6,7,8,9,0,'00','<-']
  constructor(private router:Router,  private _snackBar: MatSnackBar) { }

  ngOnInit() {}
  close() {
    localStorage.clear();
    this.router.navigate(['./mis-alarmas']);
  }
  navigate(){
    this.close();
    this._snackBar.open('Se ha programado tu alarma con éxito', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'custom-snack',
      duration: 3000,
    });
  }

}

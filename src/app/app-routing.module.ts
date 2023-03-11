import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'mis-alarmas',
    pathMatch: 'full'
  },
   {
    path: 'mis-alarmas',
    loadChildren: () =>
      import('./pages/mis-alarmas/mis-alarmas.module').then(
        (m) => m.MisAlarmasModule
      ),
  },
  {
    path: 'alarma',
    loadChildren: () =>
      import('./pages/form-alarma/form-alarma.module').then(
        (m) => m.FormAlarmaModule
      ),
  },
  {
    path: 'alarmas-sugeridas',
    loadChildren: () =>
      import('./pages/alarmas-sugeridas/alarmas-sugeridas.module').then(
        (m) => m.AlarmasSugeridasModule
      ),
  },
  {
    path: 'alarma-rapida',
    loadChildren: () =>
      import('./pages/alarma-rapida/alarma-rapida.module').then(
        (m) => m.AlarmaRapidaModule
      ),
  },
  {
    path: 'alarma-por-voz',
    loadChildren: () =>
      import('./pages/alarma-por-voz/alarma-por-voz.module').then(
        (m) => m.AlarmaPorVozModule
      ),
  },
  {
    path: 'apagar-tecla',
    loadChildren: () =>
      import('./pages/apagar-por-tecla/apagar-por-tecla.module').then(
        (m) => m.ApagarPorTeclaModule
      ),
  },
  {
    path: 'apagar-mate',
    loadChildren: () =>
      import('./pages/apagar-por-matematicas/apagar-por-matematicas.module').then(
        (m) => m.ApagarPorMatematicasModule
      ),
  },
  {
    path: 'apagar-frase',
    loadChildren: () =>
      import('./pages/apagar-por-frase/apagar-por-frase.module').then(
        (m) => m.ApagarPorFraseModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

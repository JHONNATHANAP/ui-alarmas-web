export interface AppAlarmaModel {
  titulo?: string;
  hora?: string;
  diasDelaSemana: Array<AppDiaDeLaSemana>;
  active: boolean;
  showSlider?: boolean;
  tipoApagado?: AppTipoApagado;
}
export interface AppDiaDeLaSemana {
  active: boolean;
  label: string;
  id: number;
}

export interface AppTipoApagado {
  tipo: AppOpcionesDeApagado;
  value: AppOpcionApagadoValue;
}
type AppOpcionesDeApagado = "TECLA" | "MOVIMIENTO" | "EJERCICO_MENTAL";
export interface AppOpcionApagadoValue {
  id: number;
  label: string;
}
export interface AppControl {
  placeholder: string;
  label: string;
  value?: any;
  valueText?: string;
  formControlName?: string;
  component?: any;
  type?: AppControlType;
  dias?: Array<AppDiaDeLaSemana>;
  options?: Array<AppControlOptions>;
  colums?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export type AppObjectControls = { [param: string]: AppControl };
export interface AppControlOptions {
  label: string;
  value: any;
  selected?: boolean;
}
export type AppControlType =
  | "string"
  | "number"
  | "date"
  | "time"
  | "radio"
  | "slider"
  | "modal"
  | "dias";

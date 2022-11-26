export enum ColorActionTypes {
  CHANGE_PRIMARY_COLOR = "CHANGE_PRIMARY_COLOR",
  CHANGE_SECONDARY_COLOR = "CHANGE_SECONDARY_COLOR",
}

export interface IColorsState {
  primary: string;
  secondary: string;
}

export interface IChangePrimaryColorAction {
  type: ColorActionTypes.CHANGE_PRIMARY_COLOR;
  payload: string;
}
export interface IChangeSecondaryColorAction {
  type: ColorActionTypes.CHANGE_SECONDARY_COLOR;
  payload: string;
}

export type ColorAction =
  | IChangePrimaryColorAction
  | IChangeSecondaryColorAction;

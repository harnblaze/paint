export enum lineWidthActionTypes {
  CHANGE_LINE_WIDTH = "CHANGE_LINE_WIDTH",
}

export interface lineWidthState {
  lineWidth: number;
}

export interface IChangeLineWidth {
  type: lineWidthActionTypes.CHANGE_LINE_WIDTH;
  payload: number;
}

export type lineWidthAction = IChangeLineWidth;

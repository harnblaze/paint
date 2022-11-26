import { lineWidthActionTypes } from "../../types/lineWidthTypes";

export const setLineWidth = (width: number) => {
  return { type: lineWidthActionTypes.CHANGE_LINE_WIDTH, payload: width };
};

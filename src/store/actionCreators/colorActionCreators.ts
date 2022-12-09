import { ColorAction, ColorActionTypes } from "../../types/colorTypes";

export const setPrimaryColor = (color: string): ColorAction => {
  return { type: ColorActionTypes.CHANGE_PRIMARY_COLOR, payload: color };
};

export const setSecondaryColor = (color: string): ColorAction => {
  return { type: ColorActionTypes.CHANGE_SECONDARY_COLOR, payload: color };
};

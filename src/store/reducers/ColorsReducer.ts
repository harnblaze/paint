import {
  ColorAction,
  ColorActionTypes,
  IColorsState,
} from "../../types/colorTypes";

const initialState: IColorsState = {
  primary: "black",
  secondary: "white",
};

export const colorReducer = (
  state = initialState,
  action: ColorAction
): IColorsState => {
  switch (action.type) {
    case ColorActionTypes.CHANGE_PRIMARY_COLOR:
      return { ...state, primary: action.payload };
    case ColorActionTypes.CHANGE_SECONDARY_COLOR:
      return { ...state, secondary: action.payload };
    default:
      return state;
  }
};

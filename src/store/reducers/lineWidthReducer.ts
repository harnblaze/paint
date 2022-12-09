import {
  lineWidthAction,
  lineWidthActionTypes,
  lineWidthState,
} from "../../types/lineWidthTypes";

const initialState: lineWidthState = {
  lineWidth: 5,
};

export const lineWidthReducer = (
  state = initialState,
  action: lineWidthAction
): lineWidthState => {
  switch (action.type) {
    case lineWidthActionTypes.CHANGE_LINE_WIDTH:
      return { ...state, lineWidth: action.payload };
    default:
      return state;
  }
};

import {
  DrawControllerAction,
  DrawControllerActionTypes,
  IDrawControllerState,
} from "../../types/drawController";

const initialState: IDrawControllerState = {
  controller: null,
};

export const DrawControllerReducer = (
  state = initialState,
  action: DrawControllerAction
): IDrawControllerState => {
  switch (action.type) {
    case DrawControllerActionTypes.CHANGE_CONTROLLER:
      return { ...state, controller: action.payload };
    default:
      return state;
  }
};

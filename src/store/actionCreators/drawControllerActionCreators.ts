import DrawController from "../../components/Canvas/DrawController";
import { DrawControllerActionTypes } from "../../types/drawController";

export const changeController = (controller: DrawController) => {
  return {
    type: DrawControllerActionTypes.CHANGE_CONTROLLER,
    payload: controller,
  };
};

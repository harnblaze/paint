import DrawController from "../components/Canvas/DrawController";

export enum DrawControllerActionTypes {
  CHANGE_CONTROLLER = "CHANGE_CONTROLLER",
}

export interface IDrawControllerState {
  controller: DrawController | null;
}

export interface IChangeControllerAction {
  type: DrawControllerActionTypes.CHANGE_CONTROLLER;
  payload: DrawController;
}

export type DrawControllerAction = IChangeControllerAction;

export enum ToolsActionTypes {
  CHANGE_TOOL = "CHANGE_TOOL",
}

export interface IToolsState {
  tool: string;
}

export interface IChangeToolAction {
  type: ToolsActionTypes.CHANGE_TOOL;
  payload: string;
}

export type ToolAction = IChangeToolAction;

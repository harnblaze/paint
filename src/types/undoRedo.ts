export enum UndoRedoActionTypes {
  PUSH_UNDO = "PUSH_UNDO",
  POP_UNDO = "POP_UNDO",
  PUSH_REDO = "PUSH_REDO",
  POP_REDO = "POP_REDO",
  CLEAR_REDO = "CLEAR_REDO",
}

export interface IUndoRedoState {
  undoList: string[];
  redoList: string[];
}

export interface IPushUndoAction {
  type: UndoRedoActionTypes.PUSH_UNDO;
  payload: string;
}

export interface IPopUndoAction {
  type: UndoRedoActionTypes.POP_UNDO;
}

export interface IPushRedoAction {
  type: UndoRedoActionTypes.PUSH_REDO;
  payload: string;
}

export interface IPopRedoAction {
  type: UndoRedoActionTypes.POP_REDO;
}

export interface IClearRedoAction {
  type: UndoRedoActionTypes.CLEAR_REDO;
}

export type UndoRedoAction =
  | IPushUndoAction
  | IPushRedoAction
  | IPopUndoAction
  | IPopRedoAction
  | IClearRedoAction;

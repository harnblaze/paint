import { UndoRedoAction, UndoRedoActionTypes } from "../../types/undoRedo";

export const pushToUndo = (data: string): UndoRedoAction => {
  return { type: UndoRedoActionTypes.PUSH_UNDO, payload: data };
};

export const popToUndo = (): UndoRedoAction => {
  return { type: UndoRedoActionTypes.POP_UNDO };
};
export const pushToRedo = (data: string): UndoRedoAction => {
  return { type: UndoRedoActionTypes.PUSH_REDO, payload: data };
};
export const popToRedo = (): UndoRedoAction => {
  return { type: UndoRedoActionTypes.POP_REDO };
};
export const clearRedo = (): UndoRedoAction => {
  return { type: UndoRedoActionTypes.CLEAR_REDO };
};

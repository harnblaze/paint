import {
  IUndoRedoState,
  UndoRedoAction,
  UndoRedoActionTypes,
} from "../../types/undoRedo";

const initialState: IUndoRedoState = {
  undoList: [],
  redoList: [],
};

export const undoRedoReducer = (
  state = initialState,
  action: UndoRedoAction
) => {
  switch (action.type) {
    case UndoRedoActionTypes.PUSH_UNDO:
      return { ...state, undoList: [...state.undoList, action.payload] };
    case UndoRedoActionTypes.PUSH_REDO:
      return { ...state, redoList: [...state.redoList, action.payload] };
    case UndoRedoActionTypes.POP_UNDO:
      const newUndoList = [...state.undoList];
      newUndoList.pop();
      return { ...state, undoList: newUndoList };
    case UndoRedoActionTypes.POP_REDO:
      const newRedoList = [...state.redoList];
      newRedoList.pop();
      return { ...state, redoList: newRedoList };
    case UndoRedoActionTypes.CLEAR_REDO:
      return { ...state, redoList: [] };
    default:
      return state;
  }
};

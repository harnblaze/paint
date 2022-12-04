import { IToolsState, ToolAction, ToolsActionTypes } from "../../types/tools";

const initialState: IToolsState = {
  tool: "brush",
};

export const toolReducer = (
  state = initialState,
  action: ToolAction
): IToolsState => {
  switch (action.type) {
    case ToolsActionTypes.CHANGE_TOOL:
      return { ...state, tool: action.payload };
    default:
      return state;
  }
};

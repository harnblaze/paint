import { ToolsActionTypes } from "../../types/tools";

export const changeTool = (tool: string) => {
  return { type: ToolsActionTypes.CHANGE_TOOL, payload: tool };
};

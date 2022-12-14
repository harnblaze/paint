import { combineReducers, createStore } from "redux";
import { colorReducer } from "./reducers/colorsReducer";
import { lineWidthReducer } from "./reducers/lineWidthReducer";
import { toolReducer } from "./reducers/toolsReducer";
import { DrawControllerReducer } from "./reducers/DrawControllerReducer";
import { undoRedoReducer } from "./reducers/undoRedoReducer";

const rootReducer = combineReducers({
  color: colorReducer,
  lineWidth: lineWidthReducer,
  tool: toolReducer,
  controller: DrawControllerReducer,
  undoRedo: undoRedoReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

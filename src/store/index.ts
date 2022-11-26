import { combineReducers, createStore } from "redux";
import { colorReducer } from "./reducers/colorsReducer";
import { lineWidthReducer } from "./reducers/lineWidthReducer";

const rootReducer = combineReducers({
  color: colorReducer,
  lineWidth: lineWidthReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

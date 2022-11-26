import { combineReducers, createStore } from "redux";
import { colorReducer } from "./reducers/ColorsReducer";

const rootReducer = combineReducers({
  color: colorReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

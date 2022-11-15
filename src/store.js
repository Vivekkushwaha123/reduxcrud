import { combineReducers, configureStore } from "@reduxjs/toolkit";
import crudReducer from "./features/reducer/reducerSlice";
let reducers = combineReducers({
  crudReducer,
});

const store = configureStore({
  reducer: { reducers },
});

export default store;

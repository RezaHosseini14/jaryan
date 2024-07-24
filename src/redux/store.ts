"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styleReducer from "./slices/styleSlice";

const reducer = combineReducers({
  style: styleReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

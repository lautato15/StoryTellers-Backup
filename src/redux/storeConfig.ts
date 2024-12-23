import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from "./storiesSlice";

const store = configureStore({
  reducer: {
    storiesStore: storiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

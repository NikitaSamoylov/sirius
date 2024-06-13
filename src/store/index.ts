import { configureStore } from "@reduxjs/toolkit";
import { SheduleSlice } from "./shedule-slice/shedule-slice";

export const store = configureStore({
  reducer: {
    shedule: SheduleSlice.reducer,
  },
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
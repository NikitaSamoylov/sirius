import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitState = string;

const initialState: TInitState = '';

export const FilterSubject = createSlice({
  name: '@@filterSubjer',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      return action.payload
    },
  }
});

export const { setFilter } = FilterSubject.actions;
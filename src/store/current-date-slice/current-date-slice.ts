import { createSlice } from "@reduxjs/toolkit";
import { TCurrentDate } from "../../types/current-date";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: TCurrentDate = { month: 5, year: 2024 };

export const CurrentDateSlice = createSlice({
  name: '@currentDate',
  initialState,
  reducers: {
    addDate: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    increaseDate: (state) => {
      if (state.month === 12) {
        return;
      } else {
        state.month = state.month + 1
      }
    },
    decreaseDate: (state) => {
      if (state.month === 1) {
        return;
      } else {
        state.month = state.month - 1
      }
    },
  },
});

export const { addDate, increaseDate, decreaseDate } = CurrentDateSlice.actions;
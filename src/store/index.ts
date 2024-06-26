import { configureStore } from "@reduxjs/toolkit";
import { SheduleSlice } from "./shedule-slice/shedule-slice";
import { CurrentDateSlice } from "./current-date-slice/current-date-slice";
import { FilterSubject } from "./filter-subject-slice/filter-subject-slice";
import { MessagesSlice } from "./messages-slice/messages-slice";
import { UserSlice } from "./users-slice/user-slice";
import { ActiveUser } from "./active-user-slice/active-user-slice";

export const store = configureStore({
  reducer: {
    shedule: SheduleSlice.reducer,
    currentDate: CurrentDateSlice.reducer,
    filterSubject: FilterSubject.reducer,
    messages: MessagesSlice.reducer,
    users: UserSlice.reducer,
    activeUser: ActiveUser.reducer,
  },
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
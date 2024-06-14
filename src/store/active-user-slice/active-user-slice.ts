import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

import Avatar from '../../components/header/avatar.png';

const initialState: TUser = {
  name: 'Михаил',
  avatar: Avatar
};

export const ActiveUser = createSlice({
  name: '@@activeUser',
  initialState,
  reducers: {
    handleUser: (state, action: PayloadAction<TUser>) => {
      return {
        name: action.payload.name,
        avatar: action.payload.avatar,
      }
    },
  }
});

export const { handleUser } = ActiveUser.actions;
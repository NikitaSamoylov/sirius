import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

import Avatar from '../../components/header-popup/avatar.png';
import AvatarSecondUser from '../../components/header-popup/avatar-second-user.png';

type TInitState = TUser[];

const initialState: TInitState = [
  {
    name: 'Михаил',
    avatar: Avatar,
  },
  {
    name: 'Анна',
    avatar: AvatarSecondUser,
  },
];

export const UserSlice = createSlice({
  name: '@user',
  initialState,
  reducers: {
  }
});

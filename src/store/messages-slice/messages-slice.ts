import { createSlice } from "@reduxjs/toolkit";

type TInitState = {
  title: string;
  body: string;
  date: number;
};

const initialState: TInitState[] = [
  { title: 'Здравствуйте', body: 'Новости в вашем аккаунте', date: Date.now() },
  { title: 'Здравствуйте', body: 'Новости в вашем аккаунте', date: Date.now() },
  { title: 'Здравствуйте', body: 'Новости в вашем аккаунте', date: Date.now() },
];

export const MessagesSlice = createSlice({
  name: '@@messages',
  initialState,
  reducers: {

  }
});

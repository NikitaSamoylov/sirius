import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { TShedule } from "../../types/shedule";

const initialState: TShedule[] = [
  {
    subject: 'Ментальная арифметика',
    date: [
      {
        start: 'Wed Jun 12 2024 14: 55: 26 GMT +0500',
        end: 'Wed Jun 12 2024 15: 50: 26 GMT +0500',
      },
      {
        start: '2024-07-03T12:33:23.000Z',
        end: '2024-07-03T13:05:23.000Z',
      },
      {
        start: '2024-06-15T04:33:23.000Z',
        end: '2024-06-15T04:55:23.000Z',
      },
    ],
    teacher: 'Белкина Инна',
    passed: false,
  },
  {
    subject: 'Программирование',
    date: [
      {
        start: 'Wed Jun 12 2024 17: 55: 26 GMT +0500',
        end: 'Wed Jun 12 2024 18: 55: 26 GMT +0500',
      },
      {
        start: 'Wed Jun 14 2024 20: 55: 26 GMT +0500',
        end: 'Wed Jun 14 2024 21: 55: 26 GMT +0500',
      },
      {
        start: '2024-07-03T09:33:23.000Z',
        end: '2024-07-03T10:45:23.000Z',
      },
      {
        start: '2024-06-23T11:33:23.000Z',
        end: '2024-06-23T12:03:23.000Z',
      },
      {
        start: '2024-07-03T09:33:23.000Z',
        end: '2024-07-03T10:45:23.000Z',
      },
    ],
    teacher: 'Животновская Оксана',
    passed: false,
  },
  {
    subject: 'Скорочтение',
    date: [
      {
        start: '2024-08-15T05:33:23.000Z',
        end: '2024-08-15T06:13:23.000Z',
      },
      {
        start: '2024-06-15T06:33:23.000Z',
        end: '2024-06-15T07:03:23.000Z',
      },
      {
        start: '2024-06-18T09:33:23.000Z',
        end: '2024-06-18T10:33:23.000Z',
      },
      {
        start: '2024-09-03T09:33:23.000Z',
        end: '2024-09-03T10:33:23.000Z',
      },
    ],
    teacher: 'Мин Елена',
    passed: false,
  },
]

export const SheduleSlice = createSlice({
  name: '@@shedule',
  initialState,
  reducers: {

  }
});


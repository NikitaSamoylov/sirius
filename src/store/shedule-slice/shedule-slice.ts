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
        passed: true,
        payed: true,
      },
      {
        start: '2024-05-30T15:30Z',
        end: '2024-05-30T16:00Z',
        passed: true,
        payed: true,
      },
      {
        start: '2024-06-15T04:33:23.000Z',
        end: '2024-06-15T04:55:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-06-18T04:33:23.000Z',
        end: '2024-06-18T04:55:23.000Z',
        passed: false,
        payed: false,
      },
    ],
    teacher: 'Белкина Инна',
  },
  {
    subject: 'Программирование',
    date: [
      {
        start: 'Thu May 30 2024 17: 55: 26 GMT +0500',
        end: 'Thu May 30 2024 18: 55: 26 GMT +0500',
        passed: false,
        payed: false,
      },
      {
        start: 'Wed Jun 14 2024 20: 55: 26 GMT +0500',
        end: 'Wed Jun 14 2024 21: 55: 26 GMT +0500',
        passed: false,
        payed: false,
      },
      {
        start: '2024-06-01T09:33:23.000Z',
        end: '2024-06-01T10:45:23.000Z',
        passed: true,
        payed: true,
      },
      {
        start: '2024-06-23T11:33:23.000Z',
        end: '2024-06-23T12:03:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-07-03T09:33:23.000Z',
        end: '2024-07-03T10:45:23.000Z',
        passed: false,
        payed: false,
      },
    ],
    teacher: 'Животновская Оксана',
  },
  {
    subject: 'Скорочтение',
    date: [
      {
        start: '2024-06-01T11:33:23.000Z',
        end: '2024-06-01T12:45:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-08-15T05:33:23.000Z',
        end: '2024-08-15T06:13:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-06-15T06:33:23.000Z',
        end: '2024-06-15T07:03:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-06-18T09:33:23.000Z',
        end: '2024-06-18T10:33:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-09-03T09:33:23.000Z',
        end: '2024-09-03T10:33:23.000Z',
        passed: false,
        payed: false,
      },
      {
        start: '2024-11-03T09:33:23.000Z',
        end: '2024-11-03T10:33:23.000Z',
        passed: false,
        payed: false,
      },
    ],
    teacher: 'Мин Елена',
  },
]

export const SheduleSlice = createSlice({
  name: '@@shedule',
  initialState,
  reducers: {

  }
});


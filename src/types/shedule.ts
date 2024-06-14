type TDate = {
  start: string;
  end: string;
  passed: boolean;
  payed: boolean;
};

export type TShedule = {
  subject: string;
  date: TDate[];
  teacher: string;
};

type TDate = {
  start: string;
  end: string;
};

export type TShedule = {
  subject: string;
  date: TDate[];
  teacher: string;
  passed: boolean;
};

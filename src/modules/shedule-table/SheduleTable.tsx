import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import styles from './SheduleTable.module.scss';

import NotPayedIcon from './not-payed-icon.png';

type TParsedShedule = {
  subject: string;
  date: string;
  day: string;
  month: string;
  year: string;
  timeStart: string;
  timeEnd: string;
  teacher: string;
  passed: boolean;
  payed: boolean;
};

const weekDays: string[] = [
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
  'Вс',
];

const SheduleTable: React.FC = () => {
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [daysInPrevMonth, setDaysInPrevMonth] = useState(0);
  const [daysInNextMonth, setDaysInNextMonth] = useState(0);

  const sheduleStore = useAppSelector(state => state.shedule);
  const currentDateStore = useAppSelector(state => state.currentDate);
  const filterStore = useAppSelector(state => state.filterSubject);

  const parsedShedule: TParsedShedule[] = sheduleStore.map((el) => (
    el.date.map(item => {
      return {
        subject: el.subject,
        date: item.start,
        day: new Date(item.start).toLocaleString('ru', {
          day: 'numeric',
        }),
        month: new Date(item.start).toLocaleString('ru', {
          month: 'numeric',
        }),
        year: new Date(item.start).toLocaleString('ru', {
          year: 'numeric',
        }),
        timeStart: new Date(item.start)
          .toLocaleString('ru', {
            hour: 'numeric', minute: 'numeric'
          }),
        timeEnd: new Date(item.end)
          .toLocaleString('ru', {
            hour: 'numeric',
            minute: 'numeric'
          }),
        teacher: el.teacher,
        passed: item.passed,
        payed: item.payed,
      }
    })
  ))
    .flat()
    .sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ).filter(
      el => filterStore !== '' ?
        el.subject.toLowerCase() === filterStore.toLowerCase() :
        el.subject !== filterStore
    );

  const handleDaysInMonth = () => {
    setDaysInMonth(new Date(
      currentDateStore.year,
      currentDateStore.month + 1,
      0
    ).getDate())
  };

  const handleDaysInPrevMonth = () => {
    setDaysInPrevMonth(new Date(
      currentDateStore.year,
      currentDateStore.month - 1,
      0
    ).getDate())
  };

  const handleDaysInNextMonth = () => {
    setDaysInNextMonth(new Date(
      currentDateStore.year,
      currentDateStore.month + 2,
      0
    ).getDate())
  };


  useEffect(() => {
    handleDaysInMonth();
    handleDaysInPrevMonth();
    handleDaysInNextMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheduleStore]);

  let numOfDays: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    numOfDays.push(i)
  };

  let numOfDaysPrevMonth: number[] = [];
  for (let i = 1; i <= daysInPrevMonth; i++) {
    numOfDaysPrevMonth.push(i)
  };

  let numOfNextMonth: number[] = [];
  for (let i = 1; i <= daysInNextMonth; i++) {
    numOfNextMonth.push(i)
  };

  const dayOfWeek = new Date(
    currentDateStore.year + "-" + currentDateStore.month + "-01"
  ).getDay();

  const allRenderedDates = dayOfWeek !== 1 ?
    numOfDaysPrevMonth
      .slice(
        dayOfWeek === 0 ?
          -6 :
          -(dayOfWeek - 1)
      ).length + daysInMonth :
    daysInMonth;

  const substRenderDays = allRenderedDates - 35 > 0 ?
    numOfDays.slice(
      0,
      numOfDays.length - (allRenderedDates - 35)
    ) :
    numOfDays;

  const renderedDatesWithNextMonth = allRenderedDates - 35 < 0 ?
    numOfNextMonth.slice(0, -allRenderedDates + 35) :
    [];

  console.log(parsedShedule)

  return (
    <div>
      <ul className={ styles.table }>
        {
          weekDays.map(el => {
            return (
              <li key={ el }
                className={ styles.table__item_days }
              >
                { el }
              </li>
            )
          })
        }
        {
          dayOfWeek !== 1 && (
            numOfDaysPrevMonth
              .slice(dayOfWeek === 0 ?
                -6 :
                -(dayOfWeek - 1))
              .map(el => {
                return (
                  <li key={ el }
                    className={ styles.table__item }
                  >
                    <div className={ styles.table__lessons }>
                      <p className={ styles.table__date }>
                        { el }
                      </p>
                      <div className={ styles.table__date_content }>
                        {
                          parsedShedule.map(item => (
                            new Date(`${ item.year }-${ item.month }-${ item.day }`)
                              .getTime() === new Date(
                                `${ currentDateStore.year }-${ (currentDateStore.month - 1) }-${ el }`)
                                .getTime() ?
                              <div className={
                                !item.payed ?
                                  `${ styles.lesson }
                                  ${ styles.lesson__not_payed }` :
                                  styles.lesson
                              }>
                                <div>
                                  <p className={
                                    item.passed ?
                                      `${ styles.lesson__time }
                                      ${ styles.lesson__passed }` :
                                      styles.lesson__time
                                  }>
                                    {
                                      `${ item.timeStart }-${ item.timeEnd }`
                                    }
                                  </p>
                                  <p className={
                                    item.passed ?
                                      `${ styles.lesson__subject }
                                      ${ styles.lesson__passed }` :
                                      styles.lesson__subject
                                  }>
                                    { item.subject }
                                  </p>
                                </div>
                                {
                                  !item.payed && (
                                    <img src={ NotPayedIcon } alt="не оплачено" />
                                  )
                                }
                              </div>
                              : null
                          ))
                        }
                      </div>
                    </div>
                  </li>
                )
              })
          )
        }
        {
          numOfDays.length !== 0 && (
            substRenderDays.map((el, i) => {
              return (
                <li key={ el }
                  className={
                    `${ styles.table__item }
                    ${ styles.table__item_current }`
                  }
                >
                  <div className={ styles.table__lessons }>
                    <p className={ styles.table__date }>
                      { el }
                    </p>
                    <div className={ styles.table__date_content }>
                      {
                        parsedShedule.map(item => (
                          new Date(`${ item.year }-${ item.month }-${ item.day }`)
                            .getTime() === new Date(
                              `${ currentDateStore.year }-${ currentDateStore.month }-${ el }`)
                              .getTime() ?
                            <div className={
                              currentDateStore.month === new Date().getMonth() + 1 ?
                                `${ styles.lesson } ${ styles.lesson__active }` :
                                styles.lesson
                            }>
                              <div >
                                <p className={
                                  item.passed ?
                                    `${ styles.lesson__time }
                                      ${ styles.lesson__passed }` :
                                    styles.lesson__time
                                }>
                                  {
                                    `${ item.timeStart }-${ item.timeEnd }`
                                  }
                                </p>
                                <p className={
                                  item.passed ?
                                    `${ styles.lesson__subject }
                                      ${ styles.lesson__passed }` :
                                    styles.lesson__subject
                                }>
                                  { item.subject }
                                </p>
                              </div>
                              {
                                !item.payed && (
                                  <img src={ NotPayedIcon } alt="не оплачено" />
                                )
                              }
                            </div>
                            : null
                        ))
                      }
                    </div>
                  </div>
                </li>
              )
            }
            ))
        }
        {
          renderedDatesWithNextMonth.length > 0 && (
            renderedDatesWithNextMonth.map(el => {
              return (
                <li key={ el }
                  className={ styles.table__item }
                >
                  <div className={ styles.table__lessons }>
                    <p className={ styles.table__date }>
                      { el }
                    </p>
                    <div className={ styles.table__date_content }>
                      {
                        parsedShedule.map(item => (
                          new Date(
                            `${ item.year }-${ item.month }-${ item.day }`)
                            .getTime() === new Date(
                              `${ currentDateStore.year }-${ (currentDateStore.month + 1) }-${ el }`)
                              .getTime() ?
                            <div className={ styles.lesson }>
                              <div>
                                <p className={
                                  item.passed ?
                                    `${ styles.lesson__time }
                                    ${ styles.lesson__passed }` :
                                    styles.lesson__time
                                }>
                                  {
                                    `${ item.timeStart }-${ item.timeEnd }`
                                  }
                                </p>
                                <p className={
                                  item.passed ?
                                    `${ styles.lesson__subject }
                                    ${ styles.lesson__passed }` :
                                    styles.lesson__subject
                                }>
                                  { item.subject }
                                </p>
                              </div>
                              {
                                !item.payed && (
                                  <img src={ NotPayedIcon } alt="не оплачено" />
                                )
                              }
                            </div>
                            :
                            null
                        ))
                      }
                    </div>
                  </div>
                </li>
              )
            })
          )
        }
      </ul>
    </div >
  );
};

export default SheduleTable;
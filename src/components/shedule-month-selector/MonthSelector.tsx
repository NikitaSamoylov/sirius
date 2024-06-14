import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addDate, increaseDate, decreaseDate } from '../../store/current-date-slice/current-date-slice';

import styles from './MonthSelector.module.scss';

import ArrowIcon from './arrow-icon.png';

const monthes: string[] = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];

const MonthSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentDateStore = useAppSelector(state => state.currentDate);

  const fixCurrentDate = () => {
    dispatch(addDate(
      new Date().getMonth() + 1,
    ))
  };

  useEffect(() => {
    fixCurrentDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const monthName = `${ monthes[currentDateStore.month - 1] } 
    ${ new Date().getFullYear() }`;

  const decreaseMonth = () => {
    dispatch(decreaseDate());
  };

  const increaseMonth = () => {
    dispatch(increaseDate());
  };

  return (
    <div className={ styles.controllers }>
      <div className={ styles.controllers__date }>
        <button className={ styles.controllers__arrow }
          onClick={ decreaseMonth }
        >
          <img src={ ArrowIcon } alt="назад" />
        </button>
        <div className={ styles.controllers__month }>
          {
            monthName && (
              monthName[0].toUpperCase() +
              monthName.slice(1)
            )
          }
        </div>
        <button className={
          `${ styles.controllers__arrow }
            ${ styles.controllers__arrow }`
        }
          onClick={ increaseMonth }
        >
          <img src={ ArrowIcon } alt="вперед"
            className={ styles.controllers__img_forward }
          />
        </button>
      </div>
    </div>
  )
};

export default MonthSelector;
import { useAppDispatch } from '../../hooks';
import { addDate } from '../../store/current-date-slice/current-date-slice';
import GlobalBtns from '../../ui/global-buttons/GlobalBtns';
import SubjectSelect from '../../components/shedule-subject-selector/SubjectSelect';
import MonthSelector from '../../components/shedule-month-selector/MonthSelector';
import SheduleTable from '../shedule-table/SheduleTable';

import styles from './Shedule.module.scss';

import TooltipIcon from './tooltip-icon.png';

const Shedule: React.FC = () => {
  const dispatch = useAppDispatch();

  const setCurrentMonth = () => {
    dispatch(addDate(
      new Date().getMonth() + 1
    ))
  };

  return (
    <div className={ styles.shedule }>
      <div className={ styles.shedule__header }>
        <div className={ styles.shedule__select }>
          <SubjectSelect />
        </div>
        <GlobalBtns
          title={ 'Изменить расписание' }
          size={ '344px' }
        />
      </div>
      <div className={ styles.shedule__controllers }>
        <div>
          <MonthSelector />
        </div>
        <button className={ styles.shedule__controllers_btn }
          onClick={ setCurrentMonth }
        >
          Сегодня
        </button>
        <button className={ styles.shedule__controllers_tooltip }>
          <img src={ TooltipIcon } alt="подсказка" />
        </button>
      </div>
      <div className={ styles.shedule__table }>
        <SheduleTable />
      </div>
    </div>
  )
};

export default Shedule;
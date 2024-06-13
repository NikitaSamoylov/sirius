import { useAppSelector } from '../../hooks';
import GlobalBtns from '../../ui/global-buttons/GlobalBtns';
import styles from './TasksBalans.module.scss';

const TasksBalans: React.FC = () => {
  const sheduleStore = useAppSelector((state) => state.shedule);

  return (
    <div className={ styles.tasks }>
      <h2 className={ styles.tasks__title }>
        Баланс занятий
      </h2>
      <ul className={ styles.tasks__list }>
        {
          sheduleStore.map((el) => {
            return (
              <li className={ styles.tasks__item } key={ el.subject }>
                <span className={ styles.tasks__item_title }>
                  { el.subject }
                </span>
                <span className={ styles.tasks__item_value }>
                  {
                    el.date.filter(el =>
                      new Date(el.start)
                        .getTime() >= Date.now())
                      .length
                  }
                </span>
              </li>
            )
          })
        }
      </ul>
      <GlobalBtns
        size='100%'
        title={ 'Button' }
      />
    </div>
  )
};

export default TasksBalans;
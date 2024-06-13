import { useAppSelector } from '../../hooks';
import GlobalBtns from '../../ui/global-buttons/GlobalBtns';
import styles from './Lessons.module.scss';

import AvatarIcon from './avatar-icon.png';

type TParsedShedule = {
  subject: string;
  date: string;
  day: string;
  timeStart: string;
  timeEnd: string;
  teacher: string;
  passed: boolean;
};

const Lessons: React.FC = () => {
  const sheduleStore = useAppSelector(state => state.shedule);

  const parsedShedule: TParsedShedule[] = sheduleStore.map((el) => (
    el.date.map(item => {
      return {
        subject: el.subject,
        date: item.start,
        day: new Date(item.start).toLocaleString('ru', {
          day: 'numeric',
          month: 'long'
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
        passed: el.passed,
      }
    })
  ))
    .flat()
    .sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ).filter(el => new Date(el.date).getTime() >= Date.now());

  return (
    <div className={ styles.lessons }>
      <h2 className={ styles.lessons__list_title }>
        Ближайшие уроки
      </h2>
      <ul className={ styles.lessons__list }>
        {
          parsedShedule.slice(0, 3).map((el, index) => {
            return (
              <li className={ styles.lessons__item } key={ index }>
                <div className={ styles.lessons__date }>
                  <span className={ styles.lessons__date_day }>
                    { el.day.slice(0, 2) }
                  </span>
                  <span className={ styles.lessons__date_month }>
                    { el.day.slice(3, el.day.length) }
                  </span>
                </div>
                <span className={ styles.lessons__title }>
                  { el.subject }
                </span>
                <span className={ styles.lessons__time }>
                  { `${ el.timeStart }-${ el.timeEnd } ` }
                </span>
                <div className={ styles.lessons__teacher }>
                  <img src={ AvatarIcon } alt="аватар"
                    className={ styles.lessons__teacher_avatar }
                  />
                  <span className={ styles.lessons__teacher_name }>
                    { el.teacher }
                  </span>
                </div>
                <div className={ styles.lessons__btns }>
                  <button className={
                    index === 0 ?
                      `${ styles.lessons__btn }
                      ${ styles.lessons__btn_disabled }` :
                      styles.lessons__btn
                  }>
                    Button
                  </button>
                  <button className={
                    `${ styles.lessons__btn }
                    ${ styles.lessons__btn_active }`
                  }>
                    Button
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className={ styles.lessons__main_btn }>
        <GlobalBtns title={ 'Button' }
          size={ '344px' }
        />
      </div>
    </div>
  )
};

export default Lessons;
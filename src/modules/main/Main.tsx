import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Timer from '../../components/timer/Timer';
import TasksBalans from '../../components/main-tasks-balans/TasksBalans';
import Lessons from '../../components/main-lessons/Lessons';
import styles from './Main.module.scss';

import SaleImg from './sale-img.png';
import HomeworkIcon from './homework-icon.png';
import SheetsIcon from './sheets-icon.png';
import { useEffect } from 'react';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const activeUserStore = useAppSelector(state => state.activeUser);

  useEffect(() => {
    if (activeUserStore.name === '') {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUserStore]);

  return (
    <div className="container"
      style={ { marginLeft: 18 } }
    >
      <div className={ styles.main__banners }>
        <div className={ styles.main__sale }>
          <div>
            <h2 className={ styles.sale__title }>
              До 31 декабря любой курс со скидкой 20%
            </h2>
            <p className={ styles.sale__description }>
              До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!
            </p>
          </div>
          <div>
            <img src={ SaleImg }
              alt="акция"
              className={ styles.sale__img }
            />
          </div>
        </div>
        <div className={ styles.countdown }>
          <h2 className={ styles.countdown__title }>
            Следующее занятие начнется через:
          </h2>
          <div>
            <Timer />
          </div>
          <button className={ styles.countdown__btn }>
            Button
          </button>
        </div>
        <div className={ styles.services }>
          <div className={ styles.services__item }>
            <h2 className={ styles.services__item_title }>
              Домашние
              задания
            </h2>
            <img src={ HomeworkIcon } alt="домашка"
              className={ styles.services__item_icon }
            />
          </div>
          <div className={
            `${ styles.services__item }
            ${ styles.services__item_sheets }`
          }>
            <h2 className={ styles.services__item_title }>
              Отчеты <br /> от учителей
            </h2>
            <img src={ SheetsIcon } alt="отчеты"
              className={ styles.services__item_icon }
            />
          </div>
        </div>
      </div>
      <div className={ styles.main__statistics }>
        <div className={ styles.main__tasksbalance }>
          <TasksBalans />
        </div>
        <div className={ styles.main__lessons }>
          <Lessons />
        </div>
      </div>
    </div>
  )
};

export default Main;
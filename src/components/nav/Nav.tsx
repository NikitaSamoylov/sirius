import { NavLink } from 'react-router-dom';
import Promo from '../promo/Promo';
import { ReactComponent as MainIcon } from './main-logo.svg';
import { ReactComponent as SheduleIcon } from './shedule-logo.svg';
import { ReactComponent as PaymentIcon } from './payment-logo.svg';
import { ReactComponent as AchivementsIcon } from './achivements-logo.svg';
import { ReactComponent as ExercisesIcon } from './exercises-logo.svg';
import { ReactComponent as LibraryIcon } from './library-logo.svg';
import { ReactComponent as CheckLogo } from './check-logo.svg';
import { ReactComponent as SettingsIcon } from './settings-logo.svg';
import { ReactComponent as QuestionsIcon } from './questions-logo.svg';
import styles from './Nav.module.scss';

import FullLogo from '../../assets/img/full-logo.png';

type TNavItem = {
  title: string;
  logo: any;
  link: string;
};

const navItems: TNavItem[] = [
  {
    title: 'Главная',
    logo: <MainIcon />,
    link: '/account',
  },
  {
    title: 'Расписание',
    logo: <SheduleIcon />,
    link: 'shedule',
  },
  {
    title: 'Оплата',
    logo: <PaymentIcon />,
    link: '/payment',
  },
  {
    title: 'Достижения',
    logo: <AchivementsIcon />,
    link: '/achivements',
  },
  {
    title: 'Тренажеры',
    logo: <ExercisesIcon />,
    link: '/exercises',
  },
  {
    title: 'Библиотека',
    logo: <LibraryIcon />,
    link: '/library',
  },
  {
    title: 'Проверка связи',
    logo: <CheckLogo />,
    link: '/check',
  },
  {
    title: 'Настройки',
    logo: <SettingsIcon />,
    link: '/settings',
  },
  {
    title: 'Вопросы',
    logo: <QuestionsIcon />,
    link: '/questions',
  },
];

const Nav: React.FC = () => {

  return (
    <section className={ styles.nav }>
      <div className={ styles.nav__logo }>
        <img src={ FullLogo } alt="logo" />
      </div>
      <ul className={ styles.nav__list }>
        {
          navItems.map(el => {
            return (
              <li key={ el.title }
                className={ styles.nav__item }
              >
                <NavLink to={ el.link }
                  className={
                    ({ isActive }) => isActive ?
                      `${ styles.nav__link }
                      ${ styles.nav__link_active }` :
                      styles.nav__link
                  }
                  end
                >
                  { el.logo }
                  <span className={ styles.nav__title }>
                    { el.title }
                  </span>
                </NavLink>
              </li>
            )
          })
        }
        <li className={ styles.nav__item }>

        </li>
      </ul>
      <Promo />
    </section>
  )
};

export default Nav;
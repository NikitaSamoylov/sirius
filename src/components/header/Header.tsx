import styles from './Header.module.scss';

import AvatarImg from './avatar.png';
import ChatImg from './chat-icon.png';
import ArrowImg from './Path.png';

const Header: React.FC = () => {

  return (
    <div className={ styles.header }>
      <div className={ styles.header__icons }>
        <button className={ styles.header__icon }>
          <img src={ ChatImg } alt="чат" />
        </button>
        <button className={ styles.header__icon_user }>
          <img src={ AvatarImg } alt="пользователь" />
          <img src={ ArrowImg } alt="меню"
            className={ styles.header__icon_arrow }
          />
        </button>
      </div>
    </div>
  )
};

export default Header;
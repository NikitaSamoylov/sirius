import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import HeaderPopup from '../header-popup/HeaderPopup';
import styles from './Header.module.scss';

import AvatarImg from './avatar.png';
import ChatImg from './chat-icon.png';
import ArrowImg from './Path.png';

const Header: React.FC = () => {
  const messagesStore = useAppSelector(state => state.messages);

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(isModal => !isModal)
  };

  return (
    <div className={ styles.header }>
      <div className={ styles.header__icons }>
        <div style={ { position: 'relative' } }>
          <button className={ styles.header__icon }>
            <img src={ ChatImg } alt="чат" />
          </button>
          <div className={ styles.header__badge }>
            { messagesStore.length }
          </div>
        </div>
        <button className={ styles.header__icon_user }
          onClick={ handleModal }
        >
          <img src={ AvatarImg } alt="пользователь" />
          <img src={ ArrowImg } alt="меню"
            className={ styles.header__icon_arrow }
          />
        </button>
      </div>
      {
        isModal && (
          <HeaderPopup
            handleModal={ handleModal }
          />
        )
      }
    </div>
  )
};

export default Header;
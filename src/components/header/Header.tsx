import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import HeaderPopup from '../header-popup/HeaderPopup';
import styles from './Header.module.scss';

import ChatImg from './chat-icon.png';
import ArrowImg from './Path.png';

const Header: React.FC = () => {
  const messagesStore = useAppSelector(state => state.messages);
  const activeUser = useAppSelector(state => state.activeUser);

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(isModal => !isModal)
  };

  return (
    <div className={ styles.header }>
      {
        window.location.href.includes('main') &&
        activeUser.name && (
          <div className={ styles.greetings }>
            <span className={ styles.greetings__text }>
              Добро пожаловать,
              <span className={ styles.greetings__name }>
                { activeUser.name }
              </span>
            </span>
          </div>
        )
      }
      <div className={ styles.header__icons }>
        <div style={ { position: 'relative' } }>
          {
            activeUser.name && (
              <>
                <button className={ styles.header__icon }>
                  <img src={ ChatImg } alt="чат" />
                </button>
                <div className={ styles.header__badge }>
                  { messagesStore.length }
                </div>
              </>
            )
          }

        </div>
        <button className={ styles.header__icon_user }
          onClick={ handleModal }
        >
          {
            activeUser.avatar && (
              <img src={ activeUser.avatar } alt="пользователь"
                className={ styles.header__icon_user_avatar }
              />
            )
          }
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
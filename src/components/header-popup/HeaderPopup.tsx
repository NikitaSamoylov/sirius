import { useAppSelector, useAppDispatch } from '../../hooks';
import { handleUser } from '../../store/active-user-slice/active-user-slice';
import styles from './HeaderPopup.module.scss';

import CloseIcon from './close-icon.png';
import ExitIcon from './exit.png';

type THeaderPopupProps = {
  handleModal: () => void;
};

const HeaderPopup: React.FC<THeaderPopupProps> = (
  { handleModal }
) => {
  const usersStore = useAppSelector(state => state.users);
  const activeUser = useAppSelector(state => state.activeUser);
  const dispatch = useAppDispatch();

  const updateUser = (name: string, avatar: string) => {
    dispatch(handleUser({ name, avatar }));
    handleModal();
  };

  return (
    <div className={ styles.popup }>
      <button className={ styles.popup__icon }
        onClick={ handleModal }
      >
        <img src={ CloseIcon }
          alt="Закрыть"
          className={ styles.popup__img }
        />
      </button>
      <div className={ styles.popup__content }>
        <h3 className={ styles.popup__title }>
          Смена пользователя
        </h3>
        <div className={ styles.users }>
          {
            usersStore.map((el, i) => {
              return (
                <div key={ i }
                  className={
                    activeUser.name === el.name ?
                      `${ styles.users__item }
                   ${ styles.users__item_current }` :
                      styles.users__item
                  }
                  onClick={ () => updateUser(el.name, el.avatar) }
                >
                  <img src={ el.avatar } alt={ el.name } />
                  <div className={ styles.users__content }>
                    <span className={ styles.users__name }>
                      { el.name }
                    </span>
                    {
                      activeUser.name === el.name && (
                        <span className={ styles.users__current }>
                          Это вы
                        </span>
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className={ styles.exit }>
          <button className={ styles.exit__btn }
            onClick={ () => console.log('exit') }
          >
            Выход
          </button>
          <button className={ styles.exit__icon }
            onClick={ () => console.log('log out') }
          >
            <img src={ ExitIcon } alt="выход"
              style={ { display: 'block' } }
            />
          </button>
        </div>
      </div>
    </div>
  )
};

export default HeaderPopup;
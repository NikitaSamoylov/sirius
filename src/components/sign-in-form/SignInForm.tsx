import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './SignInForm.module.scss';

import passwordIcon from './icon.png';

type TInputs = {
  email: string;
  password: string;
};

const SignInForm: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);

  const passRef = useRef('password');

  passRef.current = showPassword ? 'text' : 'password';

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TInputs>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: TInputs) => {
    console.log(data);
    reset();
    navigate('/account/main');
  };

  return (
    <div className={ styles.form }>
      <h1 className={ styles.form__title }>
        Вход в Sirius Future
      </h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className={ styles.form__item }>
          <input type="email"
            {
            ...register("email", {
              required: 'заполните поле',
              minLength: {
                value: 2,
                message: 'минимум 2 символа'
              },
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })
            }
            className={ styles.form__input }
            placeholder='E-mail'
          />
          {
            errors.email ?
              <span className={ styles.form__input_error }>
                { errors.email.message }
              </span> :
              null
          }
        </div>
        <div className={ styles.form__item }>
          <div className={ styles.form__password }>
            <input id='password'
              type={ passRef.current }
              {
              ...register("password", {
                required: 'введите пароль',
                minLength: {
                  value: 6,
                  message: 'минимум 6 символов'
                }
              })
              }
              className={ styles.form__input }
              placeholder='Пароль'
            />
            <div className={ styles.form__password_icon }
              onClick={ handlePassword }
            >
              <img src={ passwordIcon }
                alt="show"
              />
            </div>
          </div>
          {
            errors.password ?
              <span className={ styles.form__input_error }>
                { errors.password.message }
              </span> :
              null
          }
        </div>
        <div className={ styles.form__checkbox }>
          <label htmlFor="login-checkbox"
            className={ styles.form__checkbox_label }
          >
            Запомнить меня
          </label>
          <input type="checkbox"
            id='login-checkbox'
            className={ styles.form__checkbox_input }
          />
        </div>
        <button type='submit'
          className={ styles.form__btn }
        >
          Войти
        </button>
      </form>
      <div className={ styles.form__link }>
        <button className={ styles.form__link_item }>
          Я забыл пароль
        </button>
        <button className={ styles.form__link_item }>
          Войти как тренер
        </button>
      </div>
      <div className={ styles.form__register }>
        <span className={ styles.form__register_item }>
          Нет аккаунта?
        </span>
        <button className={
          `${ styles.form__register_item }
          ${ styles.form__register_item_item }`
        }>
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
};

export default SignInForm;
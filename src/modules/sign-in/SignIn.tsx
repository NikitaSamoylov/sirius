import { useState } from 'react';
import SignInForm from '../../components/sign-in-form/SignInForm';
import styles from './SignIn.module.scss';

import Logo from '../../assets/img/logo.png';

const languages: string[] = [
  'ru',
  'en'
]

const SignIn: React.FC = () => {
  const [activeLang, setActiveLang] = useState('ru');

  const handleLang = (lang: string) => {
    setActiveLang(lang);
  };

  return (
    <section className="container">
      <div className={ styles.signin }>
        <div>
          <img src={ Logo }
            alt="logo"
            className={ styles.signin__logo }
          />
        </div>
        <SignInForm />
      </div>
      <div className={ styles.signin__lang }>
        {
          languages.map((el: string) => {
            return (
              <button key={ el }
                className={
                  el !== activeLang ?
                    `${ styles.signin__lang_item }
                    ${ styles.signin__lang_item_item }` :
                    `${ styles.signin__lang_item }`
                }
                onClick={ () => handleLang(el) }
              >
                { el }
              </button>
            )
          })
        }
      </div>
    </section>
  )
};

export default SignIn;
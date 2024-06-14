import { Link } from 'react-router-dom';
import styles from './status404.module.scss';

const Status404: React.FC = () => {

  return (
    <div className={ styles.status404 }>
      <h1 className={ styles.status404__title }>
        404
      </h1>
      <h2 className={ styles.status404__subtitle }>
        Страница в разработке и скоро появится
      </h2>
      <button className={ styles.status404__btn }>
        <Link to={ '/account/main' }
          className={ styles.status404__link }
        >
          на Главную
        </Link>
      </button>
    </div>
  )
};

export default Status404;
import styles from './Promo.module.scss';

import PromoImg from './promo-img.png';

const Promo: React.FC = () => {

  return (
    <section className={ styles.promo }>
      <h3 className={ styles.promo__title }>
        Учитесь бесплатно
      </h3>
      <p className={ styles.promo__description }>
        Приводите друзей с детьми заниматься в Sirius Future
        и получайте подарки!
      </p>
      <button className={ styles.promo__btn }>
        Узнать
      </button>
      <img src={ PromoImg } alt="промо"
        className={ styles.promo__img }
      />
    </section>
  )
};

export default Promo;
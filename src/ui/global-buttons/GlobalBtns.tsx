import styles from './GlobalBtns.module.scss';

type TButtonProps = {
  title: string;
  size: string;
};

const GlobalBtns: React.FC<TButtonProps> = (
  { title, size }
) => {

  return (
    <button style={ {
      width: size
    } }
      className={ styles.btn }
    >
      { title }
    </button>
  )
};

export default GlobalBtns;
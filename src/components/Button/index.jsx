import styles from './styles.module.css';

const Button = ({
  value,
  onCLick
}) => {

  return (
    <button className={styles.button} onClick={onCLick}>
      {value}
    </button>
  );
}

export default Button;
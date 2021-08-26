import styles from './styles.module.css';

const Button = ({
  value,
  handleClick
}) => {

  return (
    <button className={styles.button} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
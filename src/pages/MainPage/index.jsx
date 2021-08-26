import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <div className={cx(styles.container, 'card pa24 flex flex-column justify-start items-center')}>
      <p className="tc b f24 mt16 mb16">
        Codeby
      </p>

      <p className="tc f20">
        César Henrique Marçal Cardoso
      </p>

      <div className="w-100 h-100 mt32 mb32 flex flex-column items-center justify-center">
        <Link to="./withFee" className={styles.link}>
          Carrinho
        </Link>

        <Link to="./withoutFee" className={styles.link}>
          Carrinho com frete grátis
        </Link>
      </div>

      <div className="w-100">
        <p className="b tc16">
          Observações
        </p>
        <p className="f16 mt12">
          1. Considerei a unidade de preço nos arquivos .json como <b>centavos</b>.
        </p>
        <p className="f16 mt12">
          2. É exibido uma animação de loading por um tempo aleatório entre 0 e 2 segundos, para simular uma chamada na api.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
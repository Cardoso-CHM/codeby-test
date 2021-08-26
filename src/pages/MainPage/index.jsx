import cx from 'classnames';
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
        <a href="./withFee" className={styles.link}>
          Carrinho
        </a>

        <a href="./withoutFee" className={styles.link}>
          Carrinho sem frete
        </a>
      </div>

      <div className="w-100">
        <p className="b tc16">
          Observações
        </p>
        <p className="f16 mt12">
          1. Os arquivos .json fornecidos não continham produtos com preços "baixos".
          Considerei como <b>R$1000,00</b> o critério para exibição do texto de frete grátis.
        </p>
        <p className="f16 mt12">
          2. É exibido uma animação de loading por um tempo aleatório entre 0 e 2 segundos, para simular uma chamada na api.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
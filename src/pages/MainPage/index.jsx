import cx from 'classnames';
import styles from './styles.module.css';

const MainPage = () => {
  return (
    <div className="w-100 h-100 flex flex-column justify-center items-center">
      <div className={cx(styles.container, 'w-100 h-100 card pa24 flex flex-column justify-start items-center')}>
        <p className="tc b f20 mt16 mb16">
          Teste para "Desenvolvedor Front End Pleno" - Codeby
        </p>
        <div className="w-100 h-100 flex flex-column items-center justify-center">
          <a href="./com-frete" className="button-reset">
            Layout com frete
          </a>

          <a href="./com-frete" className="button-reset">
            Layout sem frete
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
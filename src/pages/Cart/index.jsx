import { useEffect, useState } from "react";
import Button from "../../components/Button";
import CartItemList from "../../components/CartItemList";
import fakeApi from "../../resources/fakeApi";
import convertApiResponse from "../../utils/convertApiResponse";
import Loader from 'react-loader-spinner';
import styles from './styles.module.css';
import cx from 'classnames';
import { Link } from "react-router-dom";

const Cart = ({
  withFee
}) => {
  const [listData, setListData] = useState([]);
  const [displaySpinner, setDisplaySpinner] = useState(true);

  useEffect(() => {
    fakeApi.get(withFee)
      .then(response => {
        if(response) {
          setListData(convertApiResponse(response));
          setDisplaySpinner(false);
        }
      })
      .catch(err => console.log(err));
  }, [withFee]);

  const handleFinishButtonClick = (ev) => {
    alert("Hot stuff going on now!");
  }

  return (
    <div className={cx(styles.container, "card")}>
      <div className="flex pa16">
        <Link to="/" className="absolute f14 mt4 ml8 no-underline black pointer">
          Voltar
        </Link>
        <p className="b f20 tc-ns tr w-100">
          Meu carrinho
        </p>
      </div>

      {
        displaySpinner 
        ? (
          <div className={styles.loading}>
            <Loader 
              type="ThreeDots"
              color="#3B74F2"
              height={100}
              width={100}
              visible={true}
            />
          </div>
        )
        : (
          <>
            <CartItemList
              items={listData}
            />

            <div className="pa16">
              <Button
                value="Finalizar compra"
                handleClick={handleFinishButtonClick}
              />
            </div>
          </>
        )
      }
    </div>
  );
}

export default Cart;
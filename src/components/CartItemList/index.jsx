import CartItem from "../CartItem";
import sumArrayProperty from '../../utils/sumArrayProperty';
import styles from './styles.module.css';
import formatMoney from "../../utils/formatMoney";

const CartItemList = ({
  items
}) => {
  const total = sumArrayProperty(items, "sellingPrice");

  return (
    <div className="bt bb b--silver flex flex-column flex-grow-1">
      <div className={styles.scrollable}>
        {items.map(({ 
          id,
          description,
          price,
          sellingPrice,
          imgUrl,
        }) =>
        <div key={id} className={styles.item}>
          <CartItem
            id={id}
            description={description}
            price={price}
            sellingPrice={sellingPrice}
            imgUrl={imgUrl} 
          />
        </div>
        )}
      </div>

      <div className="flex flex-column pa24 bt b--silver">
        <div className="flex justify-between">
          <p className="b f20">
            Total
          </p>

          <p className="b f20">
            {formatMoney(total)}
          </p>
        </div>

        {total && total > 1000 && (
          <p className={styles.free}>
            Parabéns, sua compra tem frete grátis!
          </p>
        )}
      </div>
    </div>
  )
};


export default CartItemList;
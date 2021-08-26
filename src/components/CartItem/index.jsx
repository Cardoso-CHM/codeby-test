import formatMoney from '../../utils/formatMoney';
import styles from './styles.module.css';

const CartItem = ({
  id,
  description,
  price,
  sellingPrice,
  imgUrl
}) => {
  const fPrice = formatMoney(price);
  const fSellingPrice = formatMoney(sellingPrice);

  return (
    <div className="flex">
      <div className={styles.itemImg}>
        <img src={imgUrl} alt="Product Img" />
      </div>
      <div className="flex flex-column ml12 pt12">
        <p className="b f16 mb8">{description}</p>
        <p className="fw6 f12 o-60 mb4">{fPrice}</p>
        <p className="fw6 f16">{fSellingPrice}</p>
      </div>
    </div>
  );
}

export default CartItem;
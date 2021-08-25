import CartItem from "../CartItem";
import styles from './styles.module.css';

const CartItemList = ({
  items
}) => items.map(({ 
  id,
  description,
  price,
  sellingPrice,
  imgUrl,
 }) =>
 <div className={styles.item}>
   <CartItem
     id={id}
     description={description}
     price={price}
     sellingPrice={sellingPrice}
     imgUrl={imgUrl} 
   />
 </div>
);

export default CartItemList;
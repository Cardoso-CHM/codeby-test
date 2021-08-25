import Button from "../../components/Button";
import CartItemList from "../../components/CartItemList";
import Line from '../../components/Line';

const json1 = [
  {
    id: 1,
    description: "Trufa de morango",
    price: 1.23,
    sellingPrice: 1.11,
    imgUrl: "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000"
  },
  {
    id: 2,
    description: "Trufa de chocolate",
    price: 1.23,
    sellingPrice: 1.11,
    imgUrl: "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000"
  },
  {
    id: 3,
    description: "Trufa de limão",
    price: 1.23,
    sellingPrice: 1.11,
    imgUrl: "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000"
  },
  {
    id: 4,
    description: "Trufa de chocolate branco",
    price: 1.23,
    sellingPrice: 1.11,
    imgUrl: "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000"
  },
]

const Cart = ({
  withFee
}) => {
  return (
    <div className="card">
      <div className="pa16">
        <p className="b f20 tc">
          Meu carrinho
        </p>
      </div>
      <Line />

      <div className="overflow-auto pa16">
        <CartItemList
          items={json1}
        />
      </div>
      <Line />

      <div className="flex justify-between pa24">
        <p className="b f20">
          Total
        </p>

        <p className="b f20">
          R$ 13,31
        </p>
      </div>
      <Line />

      <div className="pa16">
        <Button
          value="Finalizar compra"
          onClick={() => alert("teste 1")}
        />
      </div>
    </div>
  );
}

export default Cart;
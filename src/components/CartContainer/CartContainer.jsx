import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";

function CartContainer(){

const { cartItems, removeItem, clearCart } = useContext(cartContext)
const total = cartItems.reduce( (acc, item) => acc + item.price * item.count, 0 );

async function handleCheckout(formData){
  const orderData = {
      buyer: formData,
      items: cartItems,
      date: new Date(),
      total: total,
  }

    const newOrder = await createOrder(orderData);
    clearCart();
    alert(`Tu pedido fue confirmado con éxito! - Tu ID de compra es: ${newOrder.id}`)
}
  return (
    <div>
      <h3>Tu carrito de compras</h3>
      <div>
        {cartItems.map( item => <div key={item.id}>
            <img width="100" src={item.img}></img>
            <h4>{item.title}</h4>
            <p>Unidades: {item.count}</p>
            <p>$ {item.price * item.count}</p>
            <button onClick={ () => removeItem(item.id)}>Quitar del carrito</button>
          </div>
            )
        }
        <button onClick={()=>clearCart()}> Vaciar Carrito </button>
      </div>
      <div>
        <h4>El total de tu compra es: ${total}</h4>
      </div>
      <FormCheckout handleCheckout={handleCheckout} />      
    </div>
  )
}

export default CartContainer;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../features/cartSlice";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Badge } from "react-bootstrap";

const CartList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <div id="cart">
      <h2 className="text-center my-3">Shopping Cart</h2>

      <ListGroup variant="flush" className="m-5">
        {cartItems.map((item) => (
          <ListGroup.Item>
            <img className="me-4" src={`${item.image}`} width="100" alt="hello" />
             <b>{item.title}</b>
            <span className="float-end">
              <span className="mx-5">${item.price}</span>
              <Button className="mx-1" onClick={() => handleAddToCart(item)}>
                +
              </Button>
              <Badge bg="secondary">{item.quantity}</Badge>
              <Button
                variant="danger"
                className="mx-1"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                -
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="m-5">
        <p style={{fontSize:"1.5rem"}}>Total Quantity:  <b>{totalQuantity} pcs</b>  </p>
      <p style={{fontSize:"1.5rem"}}>Total Price:  <b>${totalPrice.toFixed(2)}</b> </p>
      <Button size="lg">Proceed to order </Button>
      </div>
      
    </div>
  );
};

export default CartList;

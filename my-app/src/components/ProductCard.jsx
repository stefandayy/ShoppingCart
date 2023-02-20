import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addItemToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => { 
    const dispatch = useDispatch();

    const handleAddToCart = (item) =>{
        dispatch(addItemToCart(item))
    }

  return (
    <Card className="p-1 d-flex justify-content-center">
      <Card.Img
      className="d-flex justify-content-center"
      style={{width:"150px"}}
        variant="top"
        src={`${props.item.image}`}
      />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>
          {props.item.price}$
        </Card.Text>
        <Button variant="primary" onClick={()=>handleAddToCart(props.item)}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

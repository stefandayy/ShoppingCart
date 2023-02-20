import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Row xs={1} md={4} className="g-5 my-5 mx-3">
        {items.map((item) => (
          <Col>
            <ProductCard key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsList;

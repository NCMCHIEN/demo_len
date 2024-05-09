import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4005/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  // xoa sanpham
  const remove_product = async (id) => {
    await fetch("http://localhost:4005/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="list-product">
      <h1>TẤT CẢ SẢN PHẨM</h1>
      <div className="listproduct-format-main">
        <p>Sản phẩm</p>
        <p>Tên sản phẩm</p>
        <p>Giá cũ</p>
        <p>Gía mới</p>
        <p>Loại hàng</p>
        <p>Xóa</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img className="listproduct-product-icon" src={product.image} />
                <p>{product.name}</p>
                <p>{product.old_price}VND</p>
                <p>{product.new_price}VND</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;

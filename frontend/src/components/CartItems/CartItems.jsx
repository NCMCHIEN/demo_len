import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Sản Phẩm</p>
        <p>Tiêu Đề</p>
        <p>Giá</p>
        <p>Số Lượng</p>
        <p>Tổng</p>
        <p>Xóa</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>{product.new_price} VND</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>{product.new_price * cartItems[product.id]} VND</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Tổng Giỏ Hàng</h1>
          <div>
            <div>
              <div className="cartitems-total-item">
                <p>Tổng Cộng</p>
                <p>{getTotalCartAmount()} VND</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Phí Vận Chuyển</p>
                <p>Miễn Phí</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Tổng Cộng</h3>
                <h3>#{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>TIẾN HÀNH THANH TOÁN</button>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>Nếu bạn có mã giảm giá, vui lòng nhập ở đây</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Mã giảm giá" />
            <button>Áp Dụng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

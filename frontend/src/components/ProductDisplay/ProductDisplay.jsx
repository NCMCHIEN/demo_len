import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}VND
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price}VND
          </div>
          <div className="productdisplay-right-description">
            Từ những sản phẩm len cơ bản đến những sản phẩm len tạo điểm nhấn,
            bộ sưu tập của chúng tôi phục vụ mọi dịp và tâm trạng. Cho dù bạn
            mặc trong những buổi đi chơi bình thường, sự kiện trang trọng, hoặc
            bất cứ điều gì ở giữa, bộ sưu tập của chúng tôi đều có một cái gì đó
            cho mọi người.
          </div>

          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            THÊM VÀO GIỎ HÀNG
          </button>
          <p className="productdisplay-right-category">
            <span>Danh mục :</span> móc len, len
          </p>
          <p className="productdisplay-right-category">
            <span>Thẻ :</span> mới nhất
          </p>
        </div>
      </div>
    </div>
  );
};

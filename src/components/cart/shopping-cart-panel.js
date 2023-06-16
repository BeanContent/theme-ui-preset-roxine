/** @jsx jsx */
import { jsx } from "theme-ui";

import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useEffect } from "react";
import useCheckDevice from "../../libs/isMobile";
import useScroll from "../../libs/isScrolled";
import useWindowSize from "../../libs/useWindowSize";
import "./shopping-cart.css";

function ShoppingCart() {
  const isScrolled = useScroll(".navbar");
  const isMobile = useCheckDevice();

  const query = useStaticQuery(graphql`
    query ShoppingCartQuery {
      allContentfulProduct {
        nodes {
          name
          price
          count
          slug
          images {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const windowSize = useWindowSize();
  const products = query.allContentfulProduct.nodes;
  function ELMOutOfViewPort(e) {
    e.stopPropagation();
    const elm = e.target.nextElementSibling;
    const elmWidth = Math.floor(
      elm.getBoundingClientRect().width + elm.getBoundingClientRect().x
    );

    if (elmWidth > windowSize.width) {
      elm.style.left = "unset";
      elm.style.right = "0";
    }
  }

  const totalCart = () => {
    let totalPrice = 0;

    for (let item of products) {
      totalPrice += item.price * item.count;
    }
    return totalPrice.toFixed(2);
  };
  useEffect(() => {});

  return (
    <div className="cart">
      <button
        sx={{
          i: {
            color: (isScrolled && !isMobile) || isMobile ? "#55565b" : "white",
          },
        }}
        onFocus={ELMOutOfViewPort}
        onMouseOver={ELMOutOfViewPort}
        className="cart__btn"
      >
        <i className="custom-icon-cart"></i>
      </button>
      <div className="cart__panel animate__animated animate__fadeIn">
        <div className="cart__top">
          <h2 className="cart__top-title">Shopping Cart</h2>
        </div>
        <div className="cart__middle">
          {products.map((item, index) => {
            return <ProductCart key={index} product={item} />;
          })}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-total">
            <h2>TOTAL</h2>
            <p>${totalCart()}</p>
          </div>
          <a href="#!" className="cart__bottom-viewcart">
            VIEW CART
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCart({ product }) {
  const { name, price, count, slug } = product;
  const img = getImage(product.images[0].gatsbyImageData);
  return (
    <Link to={slug} className="product">
      <div className="product__left">
        <GatsbyImage className="product__img" image={img} alt="" />
      </div>
      <div className="product__right">
        <div className="product__info">
          <h2 className="product__info-name">{name}</h2>
          <p className="product__info-price">${price}</p>
        </div>
        <div className="product__count">
          <p className="product__count-number">x{count}</p>
        </div>
      </div>
    </Link>
  );
}
export default ShoppingCart;

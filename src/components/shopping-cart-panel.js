
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import '../styles/shopping-cart.css'
// const products = [
//   {
//     name: "Product 1",
//     price: 199,
//     img: 'https://c4.wallpaperflare.com/wallpaper/664/252/56/dog-full-hd-desktop-download-wallpaper-preview.jpg',
//     count: 1,
//     slug: '/product-1'
//   }, {
//     name: "Product 2",
//     price: 199,
//     img: 'https://c4.wallpaperflare.com/wallpaper/664/252/56/dog-full-hd-desktop-download-wallpaper-preview.jpg',
//     count: 5,
//     slug: '/product-2'
//   }
// ]


function ShoppingCart({onMouseLeave,isOpenCart}) {
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
  `)
  const products = query.allContentfulProduct.nodes
  const totalCart = () => {
    return products.reduce((partialSum, a) => ((partialSum.count*partialSum.price)+(a.count*a.price)))
  }

  return (
    <div style={{display: isOpenCart ? 'block':'none'}} className={isOpenCart ? 'cart animate__animated animate__fadeIn' : 'cart'}>
      <div className="cart__top">
        <h2 className='cart__top-title'>Shopping Cart</h2>
      </div>
      <div className="cart__middle">
        {
          products.map((item,index)=>{
            return <ProductCart key={index} product={item}/>
          })
        }
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-total">
          <h2>TOTAL</h2>
          <p>${totalCart()}</p>
        </div>
        <a href="#" className="cart__bottom-viewcart">VIEW CART</a>
      </div>
    </div>
  )
}


function ProductCart({ product }) {
  const { name, price, count, slug } = product;
  const img = getImage(product.images[0].gatsbyImageData);
  return (
    <Link to={slug} className="product">
      <div className="product__left">
          <GatsbyImage className='product__img' image={img} alt="" />
      </div>
      <div className="product__right">
        <div className="product__info">
          <h2 className='product__info-name'>{name}</h2>
          <p className="product__info-price">${price}</p>
        </div>
        <div className="product__count">
          <p className='product__count-number'>x{count}</p>
        </div>
      </div>
    </Link>
  )
}
export default ShoppingCart
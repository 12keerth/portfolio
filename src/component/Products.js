import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from "./Context";

class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products } = this.context;
    console.log("products=>",products)
    return (
      <div id="products">
        {products.map((product) => {
          return(
          <div className="card" key={product._id}>
            <Link to={`/products/${product._id}`}>
              {/* Correct the image path */}
              <img src={`/image/${product.img}`} alt={product.title} />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h3>
              <span>${product.price}</span>
              <p>{product.description}</p>
            </div>
          </div>
          )
  })}
      </div>
    );
  }
}

export default Products;

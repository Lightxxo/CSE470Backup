import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className="productdisplay">
       <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
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
                <p>(89)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ৳{product.old_price*5}
                </div>
                <div className="productdisplay-right-price-new">
                    ৳{product.new_price*5}
                </div>

            </div>

            <div className="productdisplay-right-description">
            Step out in refined style with the Solid Zippered Full-Zip Slim Fit Sweater. Its slim tailored fit flatters your physique, while the full-length zipper adds versatile wear options.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                 <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button>ADD TO CART</button>
                <p className="productdisplay-right-category"> <span>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"> <span>Tags:</span> Modern, Latest</p>
            </div>
            
        </div> 
    </div>
  )
}

export default ProductDisplay
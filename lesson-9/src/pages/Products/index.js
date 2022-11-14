import React from "../../../../TranVanTuan-Ci-Js77/lesson-92/node_modules/@types/react"
import { Link } from "../../../../TranVanTuan-Ci-Js77/lesson-92/node_modules/react-router-dom/dist"

import './style.css'
import {products} from "../../storage/products"
const Products = (props) => {
    return (
        <div className="product">
        <h2>Products List</h2>
        {products.map((item)=>{
            return (
        <Link key = {item.id} to = {`/products/${item.id}`}>
        <div className="item">
        <img src={item.image}></img>
            <div className="infor-item">
            <p>Name: {item.title} </p>
            <p>Price: {item.price} $</p>
            <button>Add to cart</button>
            </div>
          
        </div>
                </Link>
 
                
            )
        })}
        </div>
    )
}
export default Products;
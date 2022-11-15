import React from "react";
import {useParams} from 'react-router-dom'

function Product(props){
    const params = useParams()
    
 return (
<div className="detail-product">
   <div>Product {params.id}</div> 

    </div>)
}
export default Product;

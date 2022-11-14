import React from "../../../../TranVanTuan-Ci-Js77/lesson-92/node_modules/@types/react";
import {useParams} from '../../../../TranVanTuan-Ci-Js77/lesson-92/node_modules/react-router-dom/dist'

function Product(props){
    const params = useParams()
    
 return <div className="detail-product">
   <div>Product {params.id}</div> 

    </div>
}
export default Product;

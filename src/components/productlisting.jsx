import React from 'react';
import ProductComponent from './productComponent';
import '../styles/props.css';


const ProductListing = () => {
    return(<>
           <div className="listingdisplay">
           <ProductComponent />
           </div>
           </>)
};

export default ProductListing;
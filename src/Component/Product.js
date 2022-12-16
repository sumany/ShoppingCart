import React from 'react'

 function Product(props) {

    const {product, onAdd}=props;
  return (
    <div>
      <img className="small" src={product.images[0]} alt={product.title}/>
      <h3>{product.title}</h3>
      <h3>{product.rating}</h3>
      <div> ${product.price}</div>
      
      <button onClick={()=>onAdd(product)}>Add To cart</button>
    </div>
  )
}

export default Product

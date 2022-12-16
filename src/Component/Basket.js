
import React from 'react'

 function Basket(props) {
     const {cartItem ,onAdd ,onRemove} = props;

     const itemPrice = cartItem.reduce((a,c) => a + c.price * c.qty ,0);
     const taxPrice = itemPrice * 0.14;
     const shippingCharge = itemPrice>2000? 0: 50;
     const totalPrice = itemPrice+taxPrice+shippingCharge;

  return (
    <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
        {cartItem.length === 0 && <div>cart is empty</div>}

        {cartItem.map((item) =>(
            <div key={item.id} className="row">
                <div className="col-2">{item.title}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">
                        +
                        </button>
                    <button onClick={()=>onRemove(item)} className="remove"> 
                    - 
                    </button>
                </div>
                <div className="col-2">
                    {item.qty}*${item.price}

                </div>
            </div>
        )
        )}
    </div>
    {cartItem.length!==0 && (
        <>
        <hr></hr>
        <div className="row">
            <div className="col-2"> Item Price </div>
            <div className="col-1 text-right" >${itemPrice.toFixed(2)}</div>
        </div>
        <div className="row">
            <div className="col-2"> tax Price </div>
            <div className="col-1 text-right" >${taxPrice.toFixed(2)}</div>
        </div>
        <div className="row">
            <div className="col-2"> shipping Price </div>
            <div className="col-1 text-right" >${shippingCharge}</div>
        </div>
        <div className="row">
            <div className="col-2"><strong>Total Price </strong></div>
            <div className="col-1 text-right" >${totalPrice.toFixed(2)}</div>
        </div>
        <hr />
        <div className="rows">
            <button onClick={()=> alert('checkout is done')}>
            checkout
            </button>
            
        </div>
        
        </>
    )}
    </aside>
    

  )
}
export default Basket
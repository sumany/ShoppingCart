
import React from 'react'

 function Header(props) {
 
 const {countCartItem} = props;

 
  return (
    <header className="row block center">
        
        <a href ="#/">
            <h1>shopping Cart</h1>
        </a>
        <div>
            <a href="#/Cart">
                Cart{ ' '}
                {countCartItem ? (
                    <button className="badge">{countCartItem}</button>
                ):(
                    ''
                    )} 
                
                </a> <a href="#/SignIn">SignIn</a>
        </div>
    </header>
  )
}
 export default Header